"use client"

import { TelescopeIcon } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Vision() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="vision" className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Vision
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-white mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
        </div>

        <motion.div
          className="max-w-3xl mx-auto text-center"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="flex justify-center mb-8" variants={itemVariants}>
            <div className="bg-white/10 p-5 rounded-full animate-float">
              <TelescopeIcon className="h-16 w-16" />
            </div>
          </motion.div>
          <motion.p className="text-xl leading-relaxed" variants={itemVariants}>
            To be the leading import-export partner for businesses in Rajkot, Gujarat, and beyond, fostering sustainable
            growth and international trade.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
