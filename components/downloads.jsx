"use client"

import { FileDown, FileText, BookOpen, FileSpreadsheet, FileArchive } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Downloads() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const brochures = [
    {
      name: "Company Profile",
      size: "2.5 MB",
      icon: <BookOpen className="h-5 w-5 text-primary" />,
      description: "Learn about our company history, mission, and values",
    },
    {
      name: "Product Catalog",
      size: "4.8 MB",
      icon: <FileSpreadsheet className="h-5 w-5 text-primary" />,
      description: "Complete catalog of all our export products with specifications",
    },
    {
      name: "Services Overview",
      size: "1.7 MB",
      icon: <FileText className="h-5 w-5 text-primary" />,
      description: "Detailed information about our import-export services",
    },
    {
      name: "Export Guidelines",
      size: "3.2 MB",
      icon: <FileArchive className="h-5 w-5 text-primary" />,
      description: "Guidelines and regulations for international trade",
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
    <section id="downloads" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Downloads
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-primary mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
          <motion.p
            className="text-xl text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Access our brochures and informational materials to learn more about our services and products.
          </motion.p>
        </div>

        <motion.div
          className="max-w-3xl mx-auto"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <FileText className="h-6 w-6 mr-2 text-primary" />
                Brochures
              </h3>

              <div className="space-y-4">
                {brochures.map((brochure, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 hover:border-primary transition-colors duration-300"
                    variants={itemVariants}
                  >
                    <div className="flex items-center">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">{brochure.icon}</div>
                      <div>
                        <h4 className="font-medium">{brochure.name}</h4>
                        <p className="text-sm text-gray-500">{brochure.description}</p>
                        <p className="text-xs text-gray-400 mt-1">PDF • {brochure.size}</p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 group hover:bg-primary hover:text-white transition-colors duration-300"
                    >
                      <FileDown className="h-4 w-4 group-hover:animate-bounce" />
                      Download
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
