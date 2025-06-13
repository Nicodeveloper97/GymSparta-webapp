"use client"

import { motion } from "framer-motion"
import { Menu, X, Shield } from "lucide-react"
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
      className="fixed top-0 left-0 right-0 bg-eerie/90 backdrop-blur-subtle border-b-4 border-barn z-40"
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
              <div className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-barn">
                <img src="/images/Logo.jpg" alt="GymSparta Logo" className="w-full h-full object-cover" />
                {/* Spartan-inspired decorative ring */}
                <motion.div
                  className="absolute -inset-1 rounded-full border-2 border-barn opacity-50"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
              </div>
              <Text variant="h5" className="font-serif font-bold text-gradient-primary uppercase tracking-widest">
                GymSparta
              </Text>
            </motion.div>
          </Link>

          <div className="flex items-center">
            <nav className="hidden md:flex items-center space-x-8 mr-6">
              {[
                { name: "INICIO", id: "hero" },
                { name: "NOSOTROS", id: "about" },
                { name: "RUTINAS", id: "routines" },
                { name: "CONTACTO", id: "contact" },
              ].map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-flash hover:text-barn transition-colors duration-300 font-medium relative group uppercase tracking-wider"
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

            {/* Admin Panel Link */}
            <Link to="/admin" className="hidden md:block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 bg-barn/20 border-2 border-barn px-4 py-2 rounded-lg text-flash hover:bg-barn hover:text-eerie transition-all duration-300"
              >
                <Shield className="w-4 h-4" />
                <span className="font-bold uppercase tracking-wider text-sm">Admin</span>
              </motion.div>
            </Link>

            <button
              className="md:hidden text-flash hover:text-barn transition-colors duration-200 ml-4"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.nav
            className="md:hidden mt-4 pb-4 border-t border-barn pt-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            {[
              { name: "INICIO", id: "hero" },
              { name: "NOSOTROS", id: "about" },
              { name: "RUTINAS", id: "routines" },
              { name: "CONTACTO", id: "contact" },
            ].map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-2 text-flash hover:text-barn transition-colors duration-200 font-medium uppercase tracking-wider"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
              </motion.button>
            ))}

            {/* Admin Panel Link (Mobile) */}
            <Link to="/admin" className="block w-full mt-2">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center space-x-2 bg-barn/20 border-2 border-barn px-4 py-2 rounded-lg text-flash hover:bg-barn hover:text-eerie transition-all duration-300"
              >
                <Shield className="w-4 h-4" />
                <span className="font-bold uppercase tracking-wider text-sm">Panel Admin</span>
              </motion.div>
            </Link>
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}
