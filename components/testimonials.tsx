"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading"
import { Quote } from "lucide-react"
import Image from "next/image"

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const testimonials = [
    {
      quote:
        "Global Horizon has been instrumental in helping us expand our business internationally. Their expertise and guidance made the process seamless.",
      author: "Rajesh Patel",
      position: "CEO, Patel Industries",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&auto=format&fit=crop",
    },
    {
      quote:
        "Their attention to detail and commitment to quality has made them our go-to partner for all our import needs. Highly recommended!",
      author: "Priya Sharma",
      position: "Director, Sharma Enterprises",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100&auto=format&fit=crop",
    },
    {
      quote:
        "Working with Global Horizon has opened new markets for our products. Their knowledge of international trade regulations saved us time and money.",
      author: "Amit Verma",
      position: "Founder, Verma Exports",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&h=100&auto=format&fit=crop",
    },
  ]

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
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Don't just take our word for it - hear from some of our satisfied clients."
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 relative"
            >
              <Quote className="h-12 w-12 text-primary/20 absolute top-6 right-6" />
              <p className="text-gray-700 mb-6 relative z-10">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
