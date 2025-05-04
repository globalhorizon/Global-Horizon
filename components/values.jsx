"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Values() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const values = [
    "To help our clients overcome the challenges associated with exporting",
    "To be flexible and adaptable in order to work in a manner that best suits each individual client",
    "To maintain high standards of quality, value and professionalism so that clients continuously utilise our services",
    "To work proactively with our clients at all times to achieve their business goals",
    "To treat our client's business as if it were our own",
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="values" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Values
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-primary mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <ul className="space-y-4">
              {values.map((value, index) => (
                <motion.li key={index} className="flex gap-3" variants={itemVariants}>
                  <div className="bg-primary/10 p-2 rounded-full flex-shrink-0 mt-1">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-lg text-gray-700">{value}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&h=400&auto=format&fit=crop"
              alt="Our Values"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
