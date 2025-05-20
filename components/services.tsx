"use client"

import { GlobeIcon, PackageIcon, AwardIcon, TruckIcon, ClipboardCheckIcon, BarChart3Icon } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { SectionHeading } from "@/components/ui/section-heading"

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      icon: <GlobeIcon className="h-10 w-10 text-primary" />,
      title: "Global Market Access",
      description:
        "We facilitate the movement of goods across borders, connecting businesses with opportunities in international markets.",
    },
    {
      icon: <PackageIcon className="h-10 w-10 text-primary" />,
      title: "Product Sourcing",
      description:
        "Our extensive network allows us to source high-quality products from reliable manufacturers worldwide.",
    },
    {
      icon: <TruckIcon className="h-10 w-10 text-primary" />,
      title: "Logistics Management",
      description:
        "We handle all aspects of shipping, transportation, and delivery to ensure your goods arrive safely and on time.",
    },
    {
      icon: <ClipboardCheckIcon className="h-10 w-10 text-primary" />,
      title: "Documentation & Compliance",
      description:
        "Our experts navigate complex international regulations and ensure all documentation is accurate and complete.",
    },
    {
      icon: <BarChart3Icon className="h-10 w-10 text-primary" />,
      title: "Market Analysis",
      description:
        "We provide insights into market trends, consumer preferences, and competitive landscapes to inform your strategy.",
    },
    {
      icon: <AwardIcon className="h-10 w-10 text-primary" />,
      title: "Quality Assurance",
      description:
        "We implement rigorous quality control measures to ensure that all products meet international standards.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Services"
          subtitle="Comprehensive solutions to support your international trade needs."
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-primary"
            >
              <div className="bg-white p-4 rounded-full inline-block mb-6 shadow-sm">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
