"use client"

import { motion } from "framer-motion"
import Text from "@/components/atoms/Text"
import Button from "@/components/atoms/Button"
import { ArrowRight, Shield, Sword } from "lucide-react"

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
      {/* Spartan-inspired background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/images/spartan-pattern.svg')] bg-repeat opacity-5"></div>
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
              <span className="inline-flex items-center px-4 py-2 bg-primary-600/20 border border-primary-600/30 text-primary-400 text-sm font-medium rounded-full">
                <Shield className="w-4 h-4 mr-2" />
                ¡FORJA TU CUERPO DE GUERRERO!
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Text variant="h1" className="mb-6 text-balance uppercase font-bold">
                <span className="text-gradient-primary">ENTRENA</span>
                <br />
                COMO UN <span className="text-barn underline decoration-4 underline-offset-8">ESPARTANO</span>
              </Text>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Text variant="lead" color="secondary" className="mb-8 max-w-lg text-balance">
                En GymSparta no formamos simples atletas, forjamos guerreros. Cada entrenamiento es una batalla, cada
                repetición una victoria. Prepárate para transformar tu cuerpo y tu mente con la disciplina espartana.
              </Text>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="primary" size="lg" onClick={scrollToRoutines} className="glow-primary">
                ÚNETE A LA LEGIÓN
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="secondary" size="lg">
                <Sword className="w-5 h-5 mr-2" />
                VER ENTRENAMIENTOS
              </Button>
            </motion.div>

            {/* Spartan-inspired decorative element */}
            <motion.div
              className="hidden md:block absolute -bottom-16 -left-16 opacity-10"
              initial={{ opacity: 0, rotate: -20 }}
              animate={{ opacity: 0.1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <div className="w-32 h-32 border-8 border-barn rounded-full"></div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-raisin rounded-2xl overflow-hidden border-4 border-barn/30 glow-primary relative">
              {/* Main image */}
              <img
                src="/images/gym-warrior-2.avif"
                alt="Guerrero GymSparta entrenando"
                className="w-full h-full object-cover"
              />

              {/* Spartan-inspired overlay pattern */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-raisin/60"></div>
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-raisin to-transparent"></div>

              {/* Red accent line - Spartan shield inspired */}
              <div className="absolute top-4 bottom-4 left-0 w-2 bg-barn"></div>
            </div>

            {/* Stats badge */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-raisin border-4 border-bean p-6 rounded-xl shadow-lg glow-primary"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Text variant="h4" color="accent" className="mb-2 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-barn" /> 500+
              </Text>
              <Text variant="caption" color="secondary">
                GUERREROS ACTIVOS
              </Text>
            </motion.div>

            {/* Floating image */}
            <motion.div
              className="absolute -top-6 -right-6 w-24 h-24 rounded-lg overflow-hidden border-2 border-barn shadow-lg hidden md:block"
              initial={{ opacity: 0, y: 20, rotate: 5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <img
                src="/images/gym-warrior-3.avif"
                alt="Entrenamiento espartano"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
