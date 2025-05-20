"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"

const slides = [
  {
    id: 1,
    image: "img1.jpeg",
    alt: "Global trade network",
    heading: "Your Gateway to Global Trade Success",
    text: "We offer practical services, training and consultancy, to support your business with all aspects of international trade.",
  },
  {
    id: 2,
    image: "img4.jpeg",
    alt: "International shipping",
    heading: "Connecting Businesses Across Borders",
    text: "From Gujarat to the world, we facilitate seamless import and export operations for businesses of all sizes.",
  },
  {
    id: 3,
    image: "img5.jpeg",
    alt: "Business partnership",
    heading: "Your Trusted Partner in Global Commerce",
    text: "With our expertise in international trade, we help you navigate complex regulations and find new markets.",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      nextSlide()
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative h-screen">
      <Navbar />

      {/* Slider */}
      <div className="relative h-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.alt}
              fill
              className="object-cover object-center"
              priority={index === 0}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
          </div>
        ))}

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            key={currentSlide}
          >
            <motion.span
              className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/20 text-primary-foreground backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Global Import & Export Solutions
            </motion.span>

            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {slides[currentSlide].heading}
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl mb-10 text-gray-200 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {slides[currentSlide].text}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Button
                size="lg"
                className="text-lg group relative overflow-hidden bg-primary hover:bg-primary/90"
                onClick={() => scrollToSection("contact")}
              >
                Get a Quote
                <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg bg-transparent text-white border-white hover:bg-white/10 group relative overflow-hidden"
                onClick={() => scrollToSection("about")}
              >
                Learn More
                <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white cursor-pointer"
          initial={{ opacity: 0, y: -20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1.2 }}
          onClick={() => scrollToSection("about")}
        >
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
