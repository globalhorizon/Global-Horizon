"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { slideInLeft, slideInRight } from "./animation-provider"

export default function AboutUs() {
  const [textRef, textInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Us
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-primary mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div ref={textRef} variants={slideInLeft} initial="hidden" animate={textInView ? "visible" : "hidden"}>
            <p className="text-lg text-gray-700 mb-6">
              From the heart of Gujarat, we&apos;re Global Horizon, your gateway to global trade. We specialize in Hand
              Tools, Machine Tools, Sanitary ware, Kitchenware, Plastic Items, and leverage our local knowledge to
              navigate the complexities of export-import. With a focus on efficiency, reliability, we help businesses
              like yours thrive in the international arena.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Global Horizon has built a reputation for expertise in the import and export industry. We understand the
              complexities of international trade and provide our clients with a smooth and efficient experience.
            </p>
            <Button size="lg" className="mt-4 relative overflow-hidden group">
              <span className="relative z-10">Learn More</span>
              <span className="absolute inset-0 bg-primary-foreground/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </Button>
          </motion.div>
          <motion.div
            className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
            ref={imageRef}
            variants={slideInRight}
            initial="hidden"
            animate={imageInView ? "visible" : "hidden"}
          >
            <Image
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&h=400&auto=format&fit=crop"
              alt="Global Horizon Office"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
