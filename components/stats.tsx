"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GlobeIcon, UsersIcon, BuildingIcon, TruckIcon } from "lucide-react"

export default function Stats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const stats = [
    {
      icon: <GlobeIcon className="h-8 w-8" />,
      value: "10",
      label: "Countries Served",
    },
    {
      icon: <UsersIcon className="h-8 w-8" />,
      value: "50+",
      label: "Happy Clients",
    },
    {
      icon: <BuildingIcon className="h-8 w-8" />,
      value: "50+",
      label: "Partner Companies",
    },
    {
      icon: <TruckIcon className="h-8 w-8" />,
      value: "100+",
      label: "Shipments Completed",
    },
  ]

  return (
    <section className="py-16 bg-primary text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white/10 p-4 rounded-full inline-flex items-center justify-center mb-4 backdrop-blur-sm">
                {stat.icon}
              </div>
              <motion.div
                className="text-4xl font-bold mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-200">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
