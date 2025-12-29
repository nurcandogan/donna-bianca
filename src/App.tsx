import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { CollectionsPage } from "./pages/collectionsPage"
import { ContactPage } from "./pages/contactPage"
import { Collections } from "./components/collection"

function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Collections />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/koleksiyonlar" element={<CollectionsPage />} />
        <Route path="/iletisim" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}
