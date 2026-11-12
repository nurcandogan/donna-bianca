"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Link, Navigate, useParams } from "react-router-dom"
import { ArrowLeft, Check } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { getDressById, getRelatedDresses } from "@/data/collections"

export function DressDetailPage() {
  const { id } = useParams()
  const dressId = Number(id)
  const result = Number.isFinite(dressId) ? getDressById(dressId) : null

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!result) {
    return <Navigate to="/koleksiyonlar" replace />
  }

  const { dress, collection } = result
  const related = getRelatedDresses(dress.id, collection.id)

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 pb-8">
        <div className="container mx-auto px-4 lg:px-8">
          <Link
            to="/koleksiyonlar"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft size={16} />
            Koleksiyonlara dön
          </Link>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-sm bg-muted"
            >
              <img
                src={dress.image}
                alt={dress.name}
                className="w-full aspect-[3/4] object-cover"
                decoding="async"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:pt-4"
            >
              <p className="text-sm text-accent font-medium mb-3 tracking-wide uppercase">
                {collection.title}
              </p>
              <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-3 tracking-tight">
                {dress.name}
              </h1>
              <p className="text-2xl font-semibold text-accent mb-6">{dress.price}</p>
              <p className="text-muted-foreground leading-relaxed mb-8">{dress.longDescription}</p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8 border-y border-border py-6">
                <DetailRow label="Kumaş" value={dress.details.fabric} />
                <DetailRow label="Siluet" value={dress.details.silhouette} />
                <DetailRow label="Yaka" value={dress.details.neckline} />
                <DetailRow label="Kuyruk" value={dress.details.train} />
                <DetailRow label="Beden" value={dress.details.sizes} />
              </div>

              <h2 className="font-display text-lg font-semibold text-foreground mb-4">Öne çıkan özellikler</h2>
              <ul className="space-y-3 mb-10">
                {dress.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check size={16} className="text-accent mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/iletisim"
                  className="inline-flex justify-center px-8 py-3 rounded-md bg-accent text-white hover:bg-accent/90 transition-colors font-medium"
                >
                  Randevu Al
                </Link>
                <Link
                  to="/koleksiyonlar"
                  className="inline-flex justify-center px-8 py-3 rounded-md border border-border text-foreground hover:bg-muted transition-colors font-medium"
                >
                  Diğer Modeller
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 bg-[#F5F1EB]">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-8 tracking-tight text-center">
              Aynı koleksiyondan
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {related.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={`/koleksiyonlar/${item.id}`} className="group block">
                    <div className="aspect-[3/4] overflow-hidden rounded-sm mb-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <h3 className="font-display text-base font-semibold text-foreground mb-1">{item.name}</h3>
                    <p className="text-accent font-medium text-sm">{item.price}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">{label}</p>
      <p className="text-sm font-medium text-foreground">{value}</p>
    </div>
  )
}
