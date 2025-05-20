"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center z-10">
                        <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative h-12 w-auto"
                        >
                        <Image
                          src="logo.jpeg"
                          alt="Global Horizon Logo"
                          width={180}
                          height={48}
                          className="h-full w-auto object-contain rounded-lg"
                          priority
                        />
                        </motion.div>
                      <span className="text-xl ml-3 font-bold">Global Horizon</span>
                    </Link>
            <p className="text-gray-400 mb-4">
              Your gateway to global trade. We specialize in connecting businesses with international markets.
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <ArrowUp className="h-4 w-4" />
              Back to top
            </button>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-gray-400 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#certifications" className="text-gray-400 hover:text-white transition-colors">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#products" className="text-gray-400 hover:text-white transition-colors">
                  Arts & Crafts
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-gray-400 hover:text-white transition-colors">
                  Kitchenware
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-gray-400 hover:text-white transition-colors">
                  Electronics
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-gray-400 hover:text-white transition-colors">
                  Industrial
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-gray-400 hover:text-white transition-colors">
                  View All Categories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-gray-400">
              220 – The City Centre,
              <br />
              Nr. Amrapali Bridge, Raiya Main Road,
              <br />
              Rajkot – 360 007, Gujarat – India.
              <br />
              <br />
              <strong>Phone:</strong> +91 9998973164, +91 7041255360
              <br />
              <strong>Email:</strong> amwi1213@gmail.com
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Global Horizon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
