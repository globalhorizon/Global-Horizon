"use client"

import { createContext, useContext } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Create context for animations
export const AnimationContext = createContext({})

export const useAnimation = () => useContext(AnimationContext)

// Animation variants
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 },
  },
}

export const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
}

export const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

// Animation provider component
export default function AnimationProvider({ children }) {
  // Add any animation context values here if needed
  const animationContextValue = {}

  return (
    <AnimationContext.Provider value={animationContextValue}>
      <AnimatePresence>{children}</AnimatePresence>
    </AnimationContext.Provider>
  )
}

// Export motion components for easy use
export { motion }
