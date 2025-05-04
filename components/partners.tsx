"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import Image from "next/image"
import { SectionHeading } from "@/components/ui/section-heading"

export default function Partners() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const partners = [
    "/placeholder-logo.svg",
    "/placeholder-logo.svg",
    "/placeholder-logo.svg",
    "/placeholder-logo.svg",
    "/placeholder-logo.svg",
    "/placeholder-logo.svg",
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Partners"
          subtitle="We collaborate with leading companies around the world to deliver exceptional service."
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
        >
          {partners.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="w-32 h-32 md:w-40 md:h-40 bg-gray-50 rounded-lg p-4 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:shadow-md"
            >
              <Image
                src={logo || "/placeholder.svg"}
                alt={`Partner ${index + 1}`}
                width={120}
                height={60}
                className="max-w-full max-h-full object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
