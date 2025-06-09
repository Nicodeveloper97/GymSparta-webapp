"use client"

import { motion } from "framer-motion"
import Text from "../atoms/Text"
import Button from "../atoms/Button"
import { ArrowRight, Play } from "lucide-react"

export default function Hero() {
  const scrollToRoutines = () => {
    const element = document.getElementById("routines")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-neutral-50 pt-20">
      <div className="container-wide px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-neutral-100 text-neutral-700 text-sm font-medium rounded-full">
                Experiencia Fitness Premium
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Text variant="h1" className="mb-6 text-balance">
                Eleva Tu
                <br />
                Experiencia Fitness
              </Text>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Text variant="lead" color="secondary" className="mb-8 max-w-lg text-balance">
                Experimenta entrenamientos personalizados, equipamiento de última generación y una comunidad dedicada a
                tus objetivos de bienestar.
              </Text>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="primary" size="lg" onClick={scrollToRoutines}>
                Ver Mi Rutina
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="ghost" size="lg">
                <Play className="w-5 h-5 mr-2" />
                Tour Virtual
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-neutral-200 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Gimnasio moderno"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-neutral-200">
              <Text variant="h4" className="mb-2">
                500+
              </Text>
              <Text variant="caption" color="secondary">
                Miembros Felices
              </Text>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
