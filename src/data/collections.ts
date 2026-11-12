export type Dress = {
  id: number
  name: string
  image: string
  price: string
  description: string
  longDescription: string
  features: string[]
  details: {
    fabric: string
    silhouette: string
    neckline: string
    train: string
    sizes: string
  }
}

export type Collection = {
  id: string
  title: string
  description: string
  dresses: Dress[]
}

export const collections: Collection[] = [
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
        longDescription:
          "Zarif Dantel, el işçiliği dantel detaylarıyla klasik gelinlik zarafetini yansıtır. Vücut hatlarını nazikçe takip eden kesimi ve yumuşak dökümlü kumaşıyla hem dini nikah hem de düğün törenleri için ideal bir seçimdir.",
        features: ["El işçiliği dantel", "Ayarlanabilir korsaj", "İçi astarlı konfor", "Özel dikim seçeneği"],
        details: {
          fabric: "Fransız dantel & mikado",
          silhouette: "A kesim",
          neckline: "Illüzyon yaka",
          train: "Orta kuyruk",
          sizes: "34 – 46",
        },
      },
      {
        id: 2,
        name: "Vintage Şıklık",
        image: "/5.jpg",
        price: "₺52.000",
        description: "Vintage tarzı ile göz alıcı",
        longDescription:
          "Vintage Şıklık, geçmişin romantizmini bugünün siluetleriyle buluşturur. Narin işlemeleri ve yumuşak renk tonuyla nostaljik ama zamansız bir gelinlik deneyimi sunar.",
        features: ["Vintage işlemeler", "Romantik siluet", "Yumuşak tül katmanlar", "El yapımı detaylar"],
        details: {
          fabric: "Organze & dantel",
          silhouette: "Balık / mermaid",
          neckline: "Kalp yaka",
          train: "Kısa kuyruk",
          sizes: "34 – 44",
        },
      },
      {
        id: 3,
        name: "İnci Detay",
        image: "/6.jpg",
        price: "₺48.000",
        description: "İnci işlemeli özel tasarım",
        longDescription:
          "İnci Detay modeli, ince inci işçiliğiyle ışıldayan özel bir tasarımdır. Yaka ve bel hattındaki inci dokunuşları, sade kumaşla dengelenerek zarif bir bütünlük oluşturur.",
        features: ["İnci işleme", "Parlak saten doku", "Bel detayı vurgulu", "Hafif ve rahat kesim"],
        details: {
          fabric: "Saten & organze",
          silhouette: "Prenses kesim",
          neckline: "Straplez",
          train: "Orta kuyruk",
          sizes: "34 – 46",
        },
      },
      {
        id: 4,
        name: "Klasik Saten",
        image: "/7.jpg",
        price: "₺43.000",
        description: "Parlak saten kumaş ile lüks",
        longDescription:
          "Klasik Saten, pürüzsüz saten kumaşın ışıltısıyla sade ve lüks bir duruş sergiler. Minimum detay, maksimum zarafet arayan gelinler için tasarlanmıştır.",
        features: ["Parlak saten", "Temiz hatlar", "İç destekli korse", "Kolay hareket özgürlüğü"],
        details: {
          fabric: "Ağır saten",
          silhouette: "Sütun / column",
          neckline: "Tek omuz / boat",
          train: "Kısa kuyruk",
          sizes: "34 – 48",
        },
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
        longDescription:
          "Minimalist Chic, sade çizgileri ve temiz siluetiyle modern gelinlerin favorisidir. Fazlalıklardan arındırılmış tasarımı, kumaşın kalitesini ve vücut hatlarını öne çıkarır.",
        features: ["Minimal siluet", "Yüksek kalite krep", "Gizli fermuar", "Çağdaş kesim"],
        details: {
          fabric: "İtalyan krep",
          silhouette: "Straight / sütun",
          neckline: "Halter",
          train: "Sürükleme yok / kısa",
          sizes: "34 – 44",
        },
      },
      {
        id: 6,
        name: "Asimetrik Kesim",
        image: "/10.jpg",
        price: "₺58.000",
        description: "Modern asimetrik tasarım",
        longDescription:
          "Asimetrik Kesim, alışılmışın dışında yaka ve etek hatlarıyla cesur bir modernlik sunar. Sahne ışığında ve fotoğraflarda dikkat çekici bir profil yaratır.",
        features: ["Asimetrik yaka", "Dramatik döküm", "Modern kesim", "Özel dikim imkanı"],
        details: {
          fabric: "Şifon & saten",
          silhouette: "A kesim asimetrik",
          neckline: "Tek omuz",
          train: "Orta kuyruk",
          sizes: "34 – 42",
        },
      },
      {
        id: 7,
        name: "Geometrik",
        image: "/11.jpg",
        price: "₺60.000",
        description: "Geometrik kesimler ile farklılık",
        longDescription:
          "Geometrik model, yapısal kesimler ve net açılarla çağdaş bir gelinlik yorumu getirir. Mimari silueti sayesinde galeri ve modern mekan düğünleri için mükemmeldir.",
        features: ["Yapısal kesimler", "Geometrik dikişler", "Güçlü siluet", "Modern doku"],
        details: {
          fabric: "Mikado",
          silhouette: "Yapısal A kesim",
          neckline: "Kare yaka",
          train: "Kısa kuyruk",
          sizes: "34 – 44",
        },
      },
      {
        id: 8,
        name: "İpek Elegant",
        image: "/12.jpg",
        price: "₺62.000",
        description: "İpek kumaş ile modern zarafet",
        longDescription:
          "İpek Elegant, doğal ipeğin yumuşak ışıltısını modern bir kesimle birleştirir. Hafifliği ve akışkan dökümüyle hem gündüz hem gece törenlerinde rahatlık sağlar.",
        features: ["Doğal ipek", "Akışkan döküm", "Nefes alan kumaş", "Zarif modernlik"],
        details: {
          fabric: "Saf ipek",
          silhouette: "Bias kesim",
          neckline: "V yaka",
          train: "Kısa kuyruk",
          sizes: "34 – 42",
        },
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
        longDescription:
          "Masalsı Prenses, hacimli tül katmanlarıyla gerçek bir peri masalı etkisi yaratır. Salon ve açık hava düğünlerinde unutulmaz bir giriş için tasarlanmıştır.",
        features: ["Hacimli tül etek", "Derin korsaj", "Katmanlı tül", "Romantik görünüm"],
        details: {
          fabric: "Tül & saten astar",
          silhouette: "Prenses / ball gown",
          neckline: "Kalp yaka",
          train: "Uzun kuyruk",
          sizes: "34 – 46",
        },
      },
      {
        id: 10,
        name: "Kristal Prenses",
        image: "/14.jpg",
        price: "₺80.000",
        description: "Kristal taşlarla süslenmiş",
        longDescription:
          "Kristal Prenses, ışıltılı kristal taşlarla süslenmiş görkemli bir modeldir. Işık altında parlayan detayları sayesinde gece düğünleri ve balo tarzı kutlamalar için idealdir.",
        features: ["Kristal taş işlemeler", "Işıltılı yüzey", "Görkemli etek", "Özel gece tasarımı"],
        details: {
          fabric: "Tül & işlemeli organze",
          silhouette: "Prenses",
          neckline: "Straplez",
          train: "Uzun kuyruk",
          sizes: "34 – 44",
        },
      },
      {
        id: 11,
        name: "Görkemli Balon",
        image: "/16.jpg",
        price: "₺78.000",
        description: "Volanlı balon etek ile görkemli",
        longDescription:
          "Görkemli Balon, volanlı balon etek siluetiyle sahne etkisi yaratır. Dramatik hacmi ve yumuşak katmanlarıyla prenses ruhunu modern bir yoruma taşır.",
        features: ["Balon etek", "Volan detayları", "Dramatik hacim", "Salon düğünü için ideal"],
        details: {
          fabric: "Organze & tül",
          silhouette: "Balon / ball gown",
          neckline: "Boat yaka",
          train: "Orta kuyruk",
          sizes: "34 – 46",
        },
      },
      {
        id: 12,
        name: "Kraliçe",
        image: "/17.jpg",
        price: "₺85.000",
        description: "Kraliyet tarzı lüks tasarım",
        longDescription:
          "Kraliçe modeli, kraliyet esintili detayları ve lüks kumaşlarıyla en görkemli gününüz için hazırlandı. Ağır işlemeleri ve uzun kuyruğuyla unutulmaz bir duruş sunar.",
        features: ["Kraliyet işlemeleri", "Uzun kuyruk", "Lüks kumaş", "Taç & aksesuar uyumu"],
        details: {
          fabric: "Ağır dantel & saten",
          silhouette: "Prenses",
          neckline: "Kapalı / yüksek yaka",
          train: "Cathedral kuyruk",
          sizes: "34 – 44",
        },
      },
      {
        id: 13,
        name: "Işıltılı Prenses",
        image: "/18.jpg",
        price: "₺82.000",
        description: "Işıltılı detaylarla büyüleyici",
        longDescription:
          "Işıltılı Prenses, ince payet ve ışıltı detaylarıyla gece boyunca parlayan bir tasarım sunar. Romantik prenses silueti ile modern ışıltıyı bir araya getirir.",
        features: ["Işıltılı payet", "Romantik siluet", "Gece ışıltısı", "Hafif tül katmanlar"],
        details: {
          fabric: "Payetli tül",
          silhouette: "Prenses",
          neckline: "V yaka",
          train: "Orta kuyruk",
          sizes: "34 – 46",
        },
      },
      {
        id: 14,
        name: "Tül Rüya",
        image: "/19.jpg",
        price: "₺77.000",
        description: "Kat kat tül ile rüya gibi",
        longDescription:
          "Tül Rüya, kat kat yumuşak tül katmanlarıyla hafif ve rüya gibi bir etki yaratır. Hareket ettikçe dans eden etekleri sayesinde dans pistinde de büyüleyici görünür.",
        features: ["Çok katmanlı tül", "Hafif yapı", "Dans için rahat", "Romantik döküm"],
        details: {
          fabric: "Yumuşak tül",
          silhouette: "Prenses",
          neckline: "Illüzyon / kayık yaka",
          train: "Orta kuyruk",
          sizes: "34 – 48",
        },
      },
    ],
  },
]

export function getDressById(id: number) {
  for (const collection of collections) {
    const dress = collection.dresses.find((item) => item.id === id)
    if (dress) {
      return { dress, collection }
    }
  }
  return null
}

export function getRelatedDresses(dressId: number, collectionId: string, limit = 3) {
  const collection = collections.find((item) => item.id === collectionId)
  if (!collection) return []
  return collection.dresses.filter((dress) => dress.id !== dressId).slice(0, limit)
}
