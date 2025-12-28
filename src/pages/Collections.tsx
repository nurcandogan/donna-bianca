"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const collections = [
  {
    id: "klasik",
    title: "Klasik Koleksiyon",
    description: "Zamansız zarafet ve geleneksel güzellik",
    dresses: [
      {
        id: 1,
        name: "Zarif Dantel",
        image: "/4.jpg",
        price: "₺45.000",
        description: "Özenle işlenmiş dantel detaylar",
      },
      {
        id: 2,
        name: "Vintage Şıklık",
        image: "/5.jpg",
        price: "₺52.000",
        description: "Vintage tarzı ile göz alıcı",
      },
      {
        id: 3,
        name: "İnci Detay",
        image: "/6.jpg",
        price: "₺48.000",
        description: "İnci işlemeli özel tasarım",
      },
      {
        id: 4,
        name: "Klasik Saten",
        image: "/7.jpg",
        price: "₺43.000",
        description: "Parlak saten kumaş ile lüks",
      },
    ],
  },
  {
    id: "modern",
    title: "Modern Koleksiyon",
    description: "Çağdaş tasarım ve minimalist şıklık",
    dresses: [
      {
        id: 5,
        name: "Minimalist Chic",
        image: "/8.jpg",
        price: "₺55.000",
        description: "Sade ve şık çizgiler",
      },
      {
        id: 6,
        name: "Asimetrik Kesim",
        image: "/10.jpg",
        price: "₺58.000",
        description: "Modern asimetrik tasarım",
      },
      {
        id: 7,
        name: "Geometrik",
        image: "/11.jpg",
        price: "₺60.000",
        description: "Geometrik kesimler ile farklılık",
      },
      {
        id: 8,
        name: "İpek Elegant",
        image: "/12.jpg",
        price: "₺62.000",
        description: "İpek kumaş ile modern zarafet",
      },
    ],
  },
  {
    id: "prenses",
    title: "Prenses Koleksiyon",
    description: "Görkemli ve büyüleyici tasarımlar",
    dresses: [
      {
        id: 9,
        name: "Masalsı Prenses",
        image: "/13.jpg",
        price: "₺75.000",
        description: "Hacimli tül etekli masal gelinliği",
      },
      {
        id: 10,
        name: "Kristal Prenses",
        image: "/14.jpg",
        price: "₺80.000",
        description: "Kristal taşlarla süslenmiş",
      },
      {
        id: 11,
        name: "Görkemli Balon",
        image: "/16.jpg",
        price: "₺78.000",
        description: "Volanlı balon etek ile görkemli",
      },
      {
        id: 12,
        name: "Kraliçe",
        image: "/17.jpg",
        price: "₺85.000",
        description: "Kraliyet tarzı lüks tasarım",
      },
      {
        id: 13,
        name: "Işıltılı Prenses",
        image: "/18.jpg",
        price: "₺82.000",
        description: "Işıltılı detaylarla büyüleyici",
      },
      {
        id: 14,
        name: "Tül Rüya",
        image: "/19.jpg",
        price: "₺77.000",
        description: "Kat kat tül ile rüya gibi",
      },
    ],
  },
]

function DressCard({ dress, index }: { dress: any; index: number }) {
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
      <div className="aspect-[3/4] overflow-hidden">
        <motion.img
          src={dress.image}
          alt={dress.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-base font-semibold text-foreground mb-1">{dress.name}</h3>
        <p className="text-muted-foreground text-sm mb-3">{dress.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-accent font-semibold text-lg">{dress.price}</span>
          <button className="px-4 py-2 text-xs rounded-md bg-accent text-white hover:bg-accent/90 transition-colors font-medium">
            Detaylar
          </button>
        </div>
      </div>
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

      {/* Hero Section */}
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

      {/* Filter Tabs */}
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

      {/* Collections Display */}
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
              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-2 tracking-tight">{collection.title}</h2>
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

      {/* Call to Action */}
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
            <a
              href="/#contact"
              className="inline-block px-8 py-4 rounded-md bg-accent text-white hover:bg-accent/90 transition-colors font-medium text-lg"
            >
              Hemen Randevu Al
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

