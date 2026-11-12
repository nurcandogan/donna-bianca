"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { collections, type Dress } from "@/data/collections"

function DressCard({ dress, index }: { dress: Dress; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
      className="group relative overflow-hidden rounded-sm bg-white shadow-sm"
    >
      <Link to={`/koleksiyonlar/${dress.id}`} className="block">
        <div className="aspect-[3/4] overflow-hidden">
          <motion.img
            src={dress.image}
            alt={dress.name}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          />
        </div>
        <div className="p-6">
          <h3 className="font-display text-base font-semibold text-foreground mb-1">{dress.name}</h3>
          <p className="text-muted-foreground text-sm mb-3">{dress.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-accent font-semibold text-lg">{dress.price}</span>
            <span className="px-4 py-2 text-xs rounded-md bg-accent text-white group-hover:bg-accent/90 transition-colors font-medium">
              Detaylar
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export function CollectionsPage() {
  const [selectedCollection, setSelectedCollection] = useState("all")

  const filteredCollections =
    selectedCollection === "all" ? collections : collections.filter((c) => c.id === selectedCollection)

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-4 text-balance tracking-tight">
              Gelinlik Koleksiyonlarımız
            </h1>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Hayallerinizdeki gelinliği bulmak için özenle seçilmiş koleksiyonlarımızı keşfedin. Her model, özel
              gününüzü unutulmaz kılmak için tasarlandı.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedCollection("all")}
              className={`min-w-[120px] px-6 py-2 rounded-md font-medium transition-colors ${
                selectedCollection === "all"
                  ? "bg-accent text-white hover:bg-accent/90"
                  : "bg-white text-foreground border border-border hover:bg-muted"
              }`}
            >
              Tümü
            </button>
            {collections.map((collection) => (
              <button
                key={collection.id}
                onClick={() => setSelectedCollection(collection.id)}
                className={`min-w-[120px] px-6 py-2 rounded-md font-medium transition-colors ${
                  selectedCollection === collection.id
                    ? "bg-accent text-white hover:bg-accent/90"
                    : "bg-white text-foreground border border-border hover:bg-muted"
                }`}
              >
                {collection.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {filteredCollections.map((collection) => (
        <section key={collection.id} className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-2 tracking-tight">
                {collection.title}
              </h2>
              <p className="text-muted-foreground">{collection.description}</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {collection.dresses.map((dress, index) => (
                <DressCard key={dress.id} dress={dress} index={index} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 bg-[#F5F1EB]">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3 tracking-tight">
              Hayalinizdeki Gelinliği Buldunuz mu?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Modelleri yakından görmek ve provası yapmak için randevu alın. Uzman ekibimiz size özel danışmanlık
              hizmeti sunmaya hazır.
            </p>
            <Link
              to="/iletisim"
              className="inline-block px-8 py-4 rounded-md bg-accent text-white hover:bg-accent/90 transition-colors font-medium text-lg"
            >
              Hemen Randevu Al
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
