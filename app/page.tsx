import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Products from "@/components/products"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import Stats from "@/components/stats"
import Testimonials from "@/components/testimonials"

export const metadata = {
  title: "Global Horizon - Your Gateway to International Trade",
  description:
    "We offer practical services, training and consultancy, to support your business with all aspects of international trade.",
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <Services />
      <Stats />
      <Products />
      <Testimonials />
      <Certifications />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
