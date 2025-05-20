"use client"

import { MessageCircle } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    // Show button after a short delay for better UX
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    // Show tooltip after button appears
    const tooltipTimer = setTimeout(() => {
      if (isVisible) setShowTooltip(true)
    }, 3000)

    // Hide tooltip after some time
    const hideTooltipTimer = setTimeout(() => {
      setShowTooltip(false)
    }, 8000)

    return () => {
      clearTimeout(timer)
      clearTimeout(tooltipTimer)
      clearTimeout(hideTooltipTimer)
    }
  }, [isVisible])

  const handleWhatsAppClick = () => {
    // Phone number from the content
    const phoneNumber = "919998973164"
    const message = "Hello, I'm interested in your international trade services. How can you help me?"

    // Create WhatsApp URL with phone and encoded message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    // Open in a new tab
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 0 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 0 }}
            className="absolute right-full mr-4 bottom-2 bg-white text-gray-800 px-4 py-3 rounded-lg shadow-lg max-w-xs"
          >
            <p className="text-sm font-medium">Need help with international trade?</p>
            <p className="text-xs text-gray-500">Chat with us on WhatsApp!</p>
            {/* Triangle pointer */}
            <div className="absolute top-1/2 right-0 -mr-2 -translate-y-1/2 border-8 border-transparent border-l-white"></div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={handleWhatsAppClick}
        className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all group relative flex items-center"
        aria-label="Contact us on WhatsApp"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : {}}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"></span>

        <MessageCircle className="h-7 w-7" />
      </motion.button>
    </div>
  )
}
