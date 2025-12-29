"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react"

export function ContactPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adres",
      content: "Nişantaşı, İstanbul",
    },
    {
      icon: Phone,
      title: "Telefon",
      content: "+90 (212) 123 45 67",
    },
    {
      icon: Mail,
      title: "E-posta",
      content: "info@donnabianca.com",
    },
    {
      icon: Clock,
      title: "Çalışma Saatleri",
      content: "Pzt-Cmt: 10:00 - 19:00",
    },
  ]

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/donnabianca", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/donnabianca", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/donnabianca", label: "Twitter" },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 text-balance tracking-tight">
              Bizimle İletişime Geçin
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Hayalinizdeki gelinliği birlikte bulalım. Bizi ziyaret edin veya iletişim bilgilerimizden bize ulaşın.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info and Map Section */}
      <section className="py-16 bg-[#F5F1EB]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Info */}
              <motion.div
                ref={ref}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-8">
                  İletişim Bilgileri
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F5F1EB] border border-accent/30 flex items-center justify-center">
                        <info.icon className="text-accent" size={20} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display text-base font-semibold text-foreground mb-1">{info.title}</h3>
                        <p className="text-sm text-foreground">{info.content}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Map Section */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-6">
                  Bizi Ziyaret Edin
                </h2>
                <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.5!2d28.985!3d41.035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAyJzA2LjAiTiAyOMKwNTknMDYuMCJF!5e0!3m2!1str!2str!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">

              {/* Social Media Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center"
              >
                <h3 className="font-display text-lg font-semibold text-foreground mb-6">Sosyal Medyada Bizi Takip Edin</h3>
                <div className="flex justify-center gap-6">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent/30 hover:scale-110 transition-all duration-300 shadow-md"
                      aria-label={social.label}
                    >
                      <social.icon className="text-accent" size={24} />
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

