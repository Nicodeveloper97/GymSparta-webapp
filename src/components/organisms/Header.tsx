"use client"

import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import Text from "../atoms/Text"
import Button from "../atoms/Button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-subtle border-b border-neutral-200 z-40"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container-wide px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-8 h-8 bg-neutral-900 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 border border-white rounded-full" />
              </div>
              <Text variant="h5" className="font-serif font-medium">
                GymSparta
              </Text>
            </motion.div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: "Inicio", id: "hero" },
              { name: "Nosotros", id: "about" },
              { name: "Rutinas", id: "routines" },
              { name: "Contacto", id: "contact" },
            ].map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-neutral-700 hover:text-neutral-900 transition-colors duration-200 font-medium"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
              </motion.button>
            ))}
            <Link to="/admin">
              <Button variant="primary" size="sm">
                Panel Admin
              </Button>
            </Link>
          </nav>

          <button
            className="md:hidden text-neutral-700 hover:text-neutral-900 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.nav
            className="md:hidden mt-4 pb-4 border-t border-neutral-200 pt-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            {[
              { name: "Inicio", id: "hero" },
              { name: "Nosotros", id: "about" },
              { name: "Rutinas", id: "routines" },
              { name: "Contacto", id: "contact" },
            ].map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-2 text-neutral-700 hover:text-neutral-900 transition-colors duration-200 font-medium"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
              </motion.button>
            ))}
            <div className="mt-4">
              <Link to="/admin">
                <Button variant="primary" size="sm" className="w-full">
                  Panel Admin
                </Button>
              </Link>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}
