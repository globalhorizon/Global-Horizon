"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import Image from "next/image"
import { SectionHeading } from "@/components/ui/section-heading"
import {
  Palette,
  Car,
  Baby,
  Sparkles,
  Smartphone,
  Shirt,
  Lightbulb,
  Utensils,
  FileText,
  Trophy,
  Gamepad2,
  Factory,
  ShowerHead,
} from "lucide-react"

export default function Products() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const categories = [
    {
      name: "Arts & Crafts",
      icon: <Palette className="h-10 w-10" />,
      image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=200&h=200&auto=format&fit=crop",
    },
    {
      name: "Automotive",
      icon: <Car className="h-10 w-10" />,
      image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=200&h=200&auto=format&fit=crop",
    },
    {
      name: "Baby Products",
      icon: <Baby className="h-10 w-10" />,
      image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=200&h=200&auto=format&fit=crop",
    },
    {
      name: "Beauty & Personal care",
      icon: <Sparkles className="h-10 w-10" />,
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=200&h=200&auto=format&fit=crop",
    },
    {
      name: "Cell phones & accessories",
      icon: <Smartphone className="h-10 w-10" />,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=200&h=200&auto=format&fit=crop",
    },
    {
      name: "Clothing",
      icon: <Shirt className="h-10 w-10" />,
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=200&h=200&auto=format&fit=crop",
    },
    {
      name: "Electrical Items & Electronics",
      icon: <Lightbulb className="h-10 w-10" />,
      image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=200&h=200&auto=format&fit=crop",
    },
    {
      name: "Kitchenware",
      icon: <Utensils className="h-10 w-10" />,
      image: "https://images.unsplash.com/photo-1556909114-44e3e9699e2b?q=80&w=200&h=200&auto=format&fit=crop",
    },
    {
      name: "Office & Stationery Products",
      icon: <FileText className="h-10 w-10" />,
      image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=200&h=200&auto=format&fit=crop",
    },
    {
      name: "Sports",
      icon: <Trophy className="h-10 w-10" />,
      image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=200&h=200&auto=format&fit=crop",
    },
    {
      name: "Toys & Games",
      icon: <Gamepad2 className="h-10 w-10" />,
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=200&h=200&auto=format&fit=crop",
    },
    {
      name: "Industrial",
      icon: <Factory className="h-10 w-10" />,
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=200&h=200&auto=format&fit=crop",
    },
    {
      name: "Sanitarywares & Plumbing Items",
      icon: <ShowerHead className="h-10 w-10" />,
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&h=200&auto=format&fit=crop",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
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
    <section id="products" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Products"
          subtitle="We offer a wide range of products across various categories to meet your international trade needs."
        />

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden"
              variants={itemVariants}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full text-white">
                    <p className="font-medium">{category.name}</p>
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <div className="text-primary mb-4 bg-primary/10 p-4 rounded-full mx-auto w-fit">{category.icon}</div>
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                  {category.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
