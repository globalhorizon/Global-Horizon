"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { SectionHeading } from "@/components/ui/section-heading"

export default function About() {
  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="About Global Horizon"
          subtitle="Your trusted partner in international trade, connecting businesses across borders."
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, x: -50 }}
            animate={contentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Our Story</h3>
              <p className="text-gray-700">
                From the heart of Gujarat, we're Global Horizon, your gateway to global trade. We specialize in Hand
                Tools, Machine Tools, Sanitary ware, Kitchenware, Plastic Items, and leverage our local knowledge to
                navigate the complexities of export-import.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Our Mission</h3>
              <p className="text-gray-700">
                Global Horizon has built a reputation for expertise in the import and export industry. We understand the
                complexities of international trade and provide our clients with a smooth and efficient experience.
              </p>
            </div>

            <div className="flex justify-start">
              <Button
                size="lg"
                className="mt-4 relative overflow-hidden group"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <span className="relative z-10">Work With Us</span>
                <span className="absolute inset-0 bg-primary-foreground/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              </Button>
            </div>
          </motion.div>

          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: 50 }}
            animate={imageInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="map.jpeg"
                alt="Global Horizon Office"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Floating stats card */}
            {/* <motion.div
              className="absolute -bottom-10 -left-10 bg-white p-6 rounded-lg shadow-xl max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              animate={imageInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-bold text-gray-800">Our Impact</h4>
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Global Reach</span>
                    <span className="text-primary font-medium">85%</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Client Satisfaction</span>
                    <span className="text-primary font-medium">92%</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: "92%" }}></div>
                  </div>
                </div>
              </div>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
