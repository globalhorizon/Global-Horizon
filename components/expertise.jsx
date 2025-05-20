"use client"

import Image from "next/image"
import { GlobeIcon, PackageIcon, AwardIcon } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { slideInLeft, staggerContainer, staggerItem } from "./animation-provider"

export default function Expertise() {
  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section id="expertise" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Expertise
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-primary mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-2 md:order-1"
            ref={imageRef}
            variants={slideInLeft}
            initial="hidden"
            animate={imageInView ? "visible" : "hidden"}
          >
            <Image
              src="https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=600&h=400&auto=format&fit=crop"
              alt="Global Trade Expertise"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
          <motion.div
            className="order-1 md:order-2"
            ref={contentRef}
            variants={staggerContainer}
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
          >
            <div className="space-y-8">
              <motion.div className="flex gap-4" variants={staggerItem}>
                <div className="flex-shrink-0 mt-1 bg-primary/10 p-3 rounded-full">
                  <GlobeIcon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Global Reach</h3>
                  <p className="text-gray-700">
                    We facilitate the movement of goods across borders, connecting businesses with opportunities in
                    international markets.
                  </p>
                </div>
              </motion.div>

              <motion.div className="flex gap-4" variants={staggerItem}>
                <div className="flex-shrink-0 mt-1 bg-primary/10 p-3 rounded-full">
                  <PackageIcon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Comprehensive Services</h3>
                  <p className="text-gray-700">
                    From sourcing and logistics to customs clearance and documentation, we handle all aspects of import
                    and export operations.
                  </p>
                </div>
              </motion.div>

              <motion.div className="flex gap-4" variants={staggerItem}>
                <div className="flex-shrink-0 mt-1 bg-primary/10 p-3 rounded-full">
                  <AwardIcon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Commitment to Quality</h3>
                  <p className="text-gray-700">
                    We are dedicated to delivering reliable and efficient service, ensuring that our clients&apos; needs
                    are met and exceeded.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
