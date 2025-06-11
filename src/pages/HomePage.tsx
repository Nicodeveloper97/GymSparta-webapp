"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import LoadingScreen from "@/components/organisms/LoadingScreen"
import Header from "@/components/organisms/Header"
import Hero from "@/components/organisms/Hero"
import About from "@/components/organisms/About"
import RoutineSearch from "@/components/organisms/RoutineSearch"
import Contact from "@/components/organisms/Contact"
import Footer from "@/components/organisms/Footer"

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-eerie">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div key="main" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Header />
            <main>
              <Hero />
              <About />
              <RoutineSearch />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
