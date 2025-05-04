"use client"

import type React from "react"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, MessageSquare, Instagram, Facebook, Linkedin } from "lucide-react"
import { toast } from "@/components/ui/use-toast"
import { SectionHeading } from "@/components/ui/section-heading"

export default function Contact() {
  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [infoRef, infoInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    organization: "",
    email: "",
    phone: "",
    country: "",
    address: "",
    category: "",
    specifications: "",
    quantity: "",
    units: "",
    exportingCountry: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Enquiry Submitted",
        description: "Thank you for contacting Global Horizon. We will revert you soon within 24 Hrs in working days.",
      })
      // Reset form
      setFormData({
        organization: "",
        email: "",
        phone: "",
        country: "",
        address: "",
        category: "",
        specifications: "",
        quantity: "",
        units: "",
        exportingCountry: "",
      })
    }, 1500)
  }

  const productCategories = [
    "Arts & Crafts",
    "Automotive",
    "Baby Products",
    "Beauty & Personal care",
    "Cell phones & accessories",
    "Clothing",
    "Electrical Items & Electronics",
    "Kitchenware",
    "Office & Stationery Products",
    "Sports",
    "Toys & Games",
    "Industrial",
    "Sanitarywares & Plumbing Items",
  ]

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  const infoVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Contact Us"
          subtitle="We're eager to discuss how we can help your business succeed in the global marketplace."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            ref={infoRef}
            variants={infoVariants}
            initial="hidden"
            animate={infoInView ? "visible" : "hidden"}
          >
            <div className="bg-gray-50 rounded-xl shadow-md p-8 mb-8 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="text-gray-700">
                      220 – The City Centre,
                      <br />
                      Nr. Amrapali Bridge, Raiya Main Road,
                      <br />
                      Rajkot – 360 007, Gujarat – India.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-gray-700">+91 70412 55360, +91 9998973164</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-gray-700">amwi1213@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl shadow-md p-8 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>

              <div className="flex gap-6 mb-8">
                <a
                  href="https://wa.me/917041255360?text=Hello,%20I'm%20interested%20in%20your%20international%20trade%20services.%20How%20can%20you%20help%20me?"
                  target="_blank"
                  className="bg-[#25D366] text-white p-3 rounded-full hover:bg-[#25D366]/90 transition-colors transform hover:scale-110"
                  rel="noreferrer"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span className="sr-only">WhatsApp</span>
                </a>
                <a
                  href="#"
                  className="bg-[#E1306C] text-white p-3 rounded-full hover:bg-[#E1306C]/90 transition-colors transform hover:scale-110"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="#"
                  className="bg-[#1877F2] text-white p-3 rounded-full hover:bg-[#1877F2]/90 transition-colors transform hover:scale-110"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a
                  href="#"
                  className="bg-[#0A66C2] text-white p-3 rounded-full hover:bg-[#0A66C2]/90 transition-colors transform hover:scale-110"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>

              <div className="aspect-video relative rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.6768121913223!2d70.7731!3d22.2919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca248c77c099%3A0xdf5ac10af64ac8ee!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1682152549224!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-gray-50 rounded-xl shadow-md p-8 hover:shadow-lg transition-all duration-300"
            ref={formRef}
            variants={formVariants}
            initial="hidden"
            animate={formInView ? "visible" : "hidden"}
          >
            <h3 className="text-2xl font-bold mb-6">Enquiry Form</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="organization" className="block text-sm font-medium mb-1">
                  Name of the Organization/Company
                </label>
                <Input
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  required
                  className="transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  E-mail Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Contact No
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium mb-1">
                  Country
                </label>
                <Input
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium mb-1">
                  Address
                </label>
                <Textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows={3}
                  className="transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium mb-1">
                  Product Category
                </label>
                <Select value={formData.category} onValueChange={(value) => handleSelectChange("category", value)}>
                  <SelectTrigger className="transition-all duration-300 focus:ring-2 focus:ring-primary/50">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {productCategories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="specifications" className="block text-sm font-medium mb-1">
                  Other specifications
                </label>
                <Textarea
                  id="specifications"
                  name="specifications"
                  value={formData.specifications}
                  onChange={handleChange}
                  rows={3}
                  className="transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium mb-1">
                    Estimated required quantity
                  </label>
                  <Input
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                <div>
                  <label htmlFor="units" className="block text-sm font-medium mb-1">
                    Units
                  </label>
                  <Input
                    id="units"
                    name="units"
                    value={formData.units}
                    onChange={handleChange}
                    className="transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="exportingCountry" className="block text-sm font-medium mb-1">
                  Exporting country
                </label>
                <Input
                  id="exportingCountry"
                  name="exportingCountry"
                  value={formData.exportingCountry}
                  onChange={handleChange}
                  className="transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <Button type="submit" className="w-full relative overflow-hidden group" disabled={isSubmitting}>
                <span className="relative z-10">{isSubmitting ? "Submitting..." : "Submit Enquiry"}</span>
                <span className="absolute inset-0 bg-primary-foreground/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
