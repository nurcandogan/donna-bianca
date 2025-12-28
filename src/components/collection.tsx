"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const collections = [
  {
    title: "Klasik Koleksiyon",
    description: "Zamansız zarafet ve geleneksel güzellik",
    image: "/4.jpg",
  },
  {
    title: "Modern Koleksiyon",
    description: "Çağdaş tasarım ve minimalist şıklık",
    image: "/5.jpg",
  },
  {
    title: "Prenses Koleksiyon",
    description: "Görkemli ve büyüleyici tasarımlar",
    image: "/14.jpg",
  },
]

function CollectionCard({ collection, index }: { collection: (typeof collections)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.a
      href="/koleksiyonlar"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group relative overflow-hidden rounded-sm block"
    >
      <div className="aspect-[3/4] overflow-hidden">
        <motion.img
          src={collection.image}
          alt={collection.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
        />
      </div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <h3 className="font-display text-lg font-semibold text-primary-foreground mb-1">{collection.title}</h3>
        <p className="text-primary-foreground/90 text-sm">{collection.description}</p>
      </motion.div>
    </motion.a>
  )
}

export function Collections() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="collections" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-3 text-balance tracking-tight">
            Koleksiyonlarımız
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Her tarz ve zevke uygun özenle seçilmiş gelinlik koleksiyonlarımızı keşfedin
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <CollectionCard key={collection.title} collection={collection} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}



