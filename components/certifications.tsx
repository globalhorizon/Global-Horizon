"use client"

import Image from "next/image"
import { Award, BadgeCheck } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { SectionHeading } from "@/components/ui/section-heading"

export default function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const certificates = [
    {
      name: "ISO 9001:2015",
      image: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?q=80&w=240&h=160&auto=format&fit=crop",
    },
    {
      name: "Export Excellence",
      image: "https://images.unsplash.com/photo-1523294587484-bae6cc870010?q=80&w=240&h=160&auto=format&fit=crop",
    },
    {
      name: "Quality Assurance",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=240&h=160&auto=format&fit=crop",
    },
    {
      name: "Trusted Partner",
      image: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?q=80&w=240&h=160&auto=format&fit=crop",
    },
  ]

  const memberships = [
    {
      name: "Trade Association",
      image: "https://images.unsplash.com/photo-1560439514-4e9645039924?q=80&w=240&h=160&auto=format&fit=crop",
    },
    {
      name: "Chamber of Commerce",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=240&h=160&auto=format&fit=crop",
    },
    {
      name: "Export Council",
      image: "https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80&w=240&h=160&auto=format&fit=crop",
    },
    {
      name: "Industry Alliance",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=240&h=160&auto=format&fit=crop",
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
    <section id="certifications" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Certifications and Accreditations"
          subtitle="Our commitment to quality and excellence is recognized by these certifications and memberships."
        />

        <div className="grid md:grid-cols-2 gap-12" ref={ref}>
          <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <BadgeCheck className="h-6 w-6 mr-2 text-primary" />
              Certificates
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {certificates.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
                  variants={itemVariants}
                >
                  <div className="relative h-40 mb-4 overflow-hidden rounded-md">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <p className="text-center font-medium group-hover:text-primary transition-colors duration-300">
                    {item.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Award className="h-6 w-6 mr-2 text-primary" />
              Memberships
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {memberships.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
                  variants={itemVariants}
                >
                  <div className="relative h-40 mb-4 overflow-hidden rounded-md">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <p className="text-center font-medium group-hover:text-primary transition-colors duration-300">
                    {item.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
