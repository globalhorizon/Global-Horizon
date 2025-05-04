"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  center?: boolean
  className?: string
  light?: boolean
}

export function SectionHeading({ title, subtitle, center = true, className, light = false }: SectionHeadingProps) {
  return (
    <div className={cn("space-y-4 mb-12", center && "text-center", className)}>
      <motion.h2
        className={cn("text-3xl md:text-4xl font-bold tracking-tight", light && "text-white")}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>

      <motion.div
        className={cn("h-1 w-20 bg-primary", center && "mx-auto")}
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />

      {subtitle && (
        <motion.p
          className={cn("text-lg text-muted-foreground max-w-3xl", center && "mx-auto", light && "text-gray-200")}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
