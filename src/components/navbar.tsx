"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Link, useNavigate, useLocation } from "react-router-dom"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (location.hash) {
      const timer = setTimeout(() => {
        const element = document.querySelector(location.hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [location.pathname, location.hash])

  const goHome = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      navigate("/")
      window.scrollTo(0, 0)
    }
  }

  const goToHash = (hash: string) => {
    if (location.pathname === "/") {
      const element = document.getElementById(hash)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    } else {
      navigate(`/#${hash}`)
    }
  }

  const handleNavClick = (href: string) => {
    setIsOpen(false)

    if (href === "/") {
      goHome()
      return
    }

    if (href.startsWith("/#")) {
      goToHash(href.split("#")[1])
      return
    }

    navigate(href)
    window.scrollTo(0, 0)
  }

  const menuItems = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Koleksiyonlar", href: "/koleksiyonlar" },
    { label: "Hakkımızda", href: "/#about" },
    { label: "İletişim", href: "/iletisim" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/30 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault()
              goHome()
            }}
            className="font-display text-xl lg:text-2xl font-semibold text-accent drop-shadow-lg hover:opacity-90 transition-opacity"
          >
            Donna Bianca
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <motion.div key={item.href} whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 400 }}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                  className="text-sm font-medium text-white hover:text-accent transition-colors drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
                  style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
                >
                  {item.label}
                </a>
              </motion.div>
            ))}
            <a
              href="/#contact"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick("/#contact")
              }}
              className="bg-accent text-white hover:bg-accent/90 shadow-lg px-6 py-2 rounded-md transition-colors font-medium"
            >
              Randevu Al
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white drop-shadow-lg"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/20"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                  className="text-white hover:text-accent transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/#contact"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick("/#contact")
                }}
                className="bg-accent text-white hover:bg-accent/90 w-full px-6 py-2 rounded-md transition-colors font-medium text-center"
              >
                Randevu Al
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
