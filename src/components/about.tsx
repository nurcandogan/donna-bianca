"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Heart, Sparkles, Users } from "lucide-react"

const features = [
  {
    icon: Heart,
    title: "Tutkuyla Tasarlandı",
    description: "Her gelinlik, aşk ve özenle tasarlanmış benzersiz bir sanat eseridir.",
  },
  {
    icon: Sparkles,
    title: "Kaliteli Kumaşlar",
    description: "En kaliteli kumaşlar ve aksesuarlar ile hayalinizdeki gelinliği yaratıyoruz.",
  },
  {
    icon: Users,
    title: "Kişisel Danışmanlık",
    description: "Uzman ekibimiz size özel danışmanlık hizmeti sunarak mükemmel gelinliği bulmanıza yardımcı olur.",
  },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 lg:py-32 bg-[#F5F1EB]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-sm overflow-hidden">
              <img src="/3.jpeg" alt="Donna Bianca Mağaza" className="w-full h-full object-cover" />
            </div>
            <motion.div
              className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-8 rounded-sm shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="font-display text-2xl font-semibold">15+</p>
              <p className="text-sm">Yıllık Deneyim</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4 text-balance tracking-tight">
              Donna Bianca Hikayesi
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
              2008 yılından bu yana, binlerce gelinin hayallerini gerçeğe dönüştürüyoruz. Donna Bianca olarak, her
              gelinin özel gününde kendini prenses gibi hissetmesini sağlamak için tutkuyla çalışıyoruz.
            </p>
            <p className="text-sm md:text-base text-muted-foreground mb-8 leading-relaxed">
              Geleneksel el işçiliğini modern tasarımla birleştirerek, size özel ve unutulmaz gelinlikler yaratıyoruz.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <feature.icon className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
