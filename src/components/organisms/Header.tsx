"use client"

import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import Text from "@/components/atoms/Text"

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
      className="fixed top-0 left-0 right-0 bg-eerie/90 backdrop-blur-subtle border-b border-bean z-40"
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
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white rounded-full" />
              </div>
              <Text variant="h5" className="font-serif font-bold text-gradient-primary">
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
                className="text-flash hover:text-barn transition-colors duration-300 font-medium relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-barn origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </nav>

          <button
            className="md:hidden text-flash hover:text-barn transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.nav
            className="md:hidden mt-4 pb-4 border-t border-bean pt-4"
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
                className="block w-full text-left py-2 text-flash hover:text-barn transition-colors duration-200 font-medium"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
              </motion.button>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}
