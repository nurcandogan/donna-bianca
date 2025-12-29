"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/2.jpeg"
          alt="Luxury Bridal Boutique"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Hayalinizdeki Gelinlik
            <br />
            <span className="text-accent drop-shadow-2xl">Donna Bianca'da</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed drop-shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Özel gününüzü unutulmaz kılacak zarif ve benzersiz gelinlik tasarımları. Her detayda mükemmellik, her
            dikişte aşk.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href="/koleksiyonlar"
              className="bg-accent text-white hover:bg-accent/90 px-8 py-4 text-lg shadow-xl rounded-md font-medium transition-colors flex items-center gap-2"
            >
              Koleksiyonları İncele
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              >
                <ChevronDown className="text-white drop-shadow-lg" size={24} />
              </motion.div>
            </a>
            <a
              href="#contact"
              className="px-8 py-4 text-lg border-2 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 shadow-xl rounded-md font-medium transition-colors"
            >
              Randevu Al
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
