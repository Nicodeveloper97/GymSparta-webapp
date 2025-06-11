"use client"

import { motion } from "framer-motion"
import Text from "@/components/atoms/Text"
import Button from "@/components/atoms/Button"
import { ArrowRight, Play } from "lucide-react"

export default function Hero() {
  const scrollToRoutines = () => {
    const element = document.getElementById("routines")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-dark pt-20 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(220, 38, 38, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(251, 191, 36, 0.3) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="container-wide px-6 relative z-10">
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
              <span className="inline-block px-4 py-2 bg-primary-600/20 border border-primary-600/30 text-primary-400 text-sm font-medium rounded-full">
                ¡Libera tu fuerza interior!
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Text variant="h1" className="mb-6 text-balance">
                <span className="text-gradient-primary">Transforma</span>
                <br />
                Tu Vida
              </Text>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Text variant="lead" color="secondary" className="mb-8 max-w-lg text-balance">
                ¡Bienvenido a GymSparta, donde el fitness se combina con la diversión! ¡Prepárate para liberar tu fuerza
                interior y transformar tu vida!
              </Text>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="primary" size="lg" onClick={scrollToRoutines} className="glow-primary">
                ¡Únete ahora!
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="secondary" size="lg">
                <Play className="w-5 h-5 mr-2" />
                Ver Rutinas
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-raisin rounded-2xl overflow-hidden border border-barn/30 glow-primary">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Gimnasio moderno"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              className="absolute -bottom-6 -left-6 bg-raisin border border-bean/30 p-6 rounded-xl shadow-lg glow-primary"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Text variant="h4" color="accent" className="mb-2">
                500+
              </Text>
              <Text variant="caption" color="secondary">
                Guerreros Activos
              </Text>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
