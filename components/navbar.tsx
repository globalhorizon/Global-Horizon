"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Package2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ]

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId.replace("#", ""))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center z-10">
          <Package2 className={`h-8 w-8 mr-2 ${scrolled ? "text-primary" : "text-white"}`} />
          <motion.span
            className={`text-xl font-bold ${scrolled ? "text-primary" : "text-white"}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Global Horizon
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <button
                onClick={() => scrollToSection(item.href)}
                className={`font-medium relative group ${scrolled ? "text-gray-800" : "text-white"}`}
              >
                {item.name}
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            <Button
              variant="default"
              size="sm"
              className="relative overflow-hidden group"
              onClick={() => scrollToSection("#contact")}
            >
              <span className="relative z-10">Get a Quote</span>
              <span className="absolute inset-0 bg-primary-foreground/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </Button>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden z-10"
          onClick={toggleMenu}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isMenuOpen ? (
            <X className={`h-6 w-6 ${scrolled ? "text-gray-800" : "text-white"}`} />
          ) : (
            <Menu className={`h-6 w-6 ${scrolled ? "text-gray-800" : "text-white"}`} />
          )}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-800 hover:text-primary font-medium text-2xl block py-2"
                  >
                    {item.name}
                  </button>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
              >
                <Button variant="default" size="lg" className="w-full mt-4" onClick={() => scrollToSection("#contact")}>
                  Get a Quote
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
