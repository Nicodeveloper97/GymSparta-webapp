"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Text from "@/components/atoms/Text"
import { Award, Users, Clock, Shield, Sword, Flame, Dumbbell } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Sword,
      title: "DISCIPLINA ESPARTANA",
      description:
        "Entrenamiento diseñado con la misma disciplina que forjó a los guerreros más temidos de la historia.",
      color: "barn",
    },
    {
      icon: Shield,
      title: "LEGIÓN SPARTA",
      description: "Únete a una hermandad de guerreros que se impulsan mutuamente hacia la gloria.",
      color: "bean",
    },
    {
      icon: Clock,
      title: "BATALLA 24/7",
      description: "El campo de batalla está siempre abierto. Entrena cuando tu espíritu de lucha esté más fuerte.",
      color: "barn",
    },
    {
      icon: Flame,
      title: "RESULTADOS DE LEYENDA",
      description: "Transformaciones físicas dignas de ser talladas en mármol griego, garantizadas.",
      color: "bean",
    },
  ]

  const stats = [
    { number: "500+", label: "GUERREROS ACTIVOS", icon: Users },
    { number: "15", label: "COMANDANTES ELITE", icon: Award },
    { number: "300", label: "VICTORIAS DIARIAS", icon: Flame },
  ]

  return (
    <section id="about" className="section-padding bg-gradient-dark relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/images/spartan-shield.svg')] bg-repeat-space opacity-5 bg-fixed"></div>
      </div>
      <div className="absolute inset-0 cyber-grid opacity-5" />
      <div className="absolute inset-0 hex-pattern" />

      <div className="container-wide px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <Text variant="h2" color="primary" className="mb-6 flex items-center justify-center">
            <Shield className="w-8 h-8 mr-3 text-barn" /> EL CÓDIGO
          </Text>
          <Text variant="h2" className="mb-8 text-gradient-primary uppercase font-bold tracking-widest">
            GYMSPARTA
          </Text>
          <div className="w-32 h-1 bg-gradient-to-r from-barn via-bean to-barn mx-auto mb-8" />
          <Text variant="lead" color="secondary" className="max-w-3xl mx-auto leading-relaxed">
            No somos solo un gimnasio. Somos la arena donde se forjan los guerreros modernos. El lugar donde el sudor,
            la disciplina y el honor se convierten en fuerza, resistencia y victoria.
          </Text>
        </motion.div>

        {/* Image and features grid */}
        <div className="grid lg:grid-cols-5 gap-8 mb-20">
          {/* Large feature image - Using one of our new images */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 relative"
          >
            <div className="aspect-[3/4] bg-raisin rounded-lg overflow-hidden border-4 border-barn/50 relative">
              <img
                src="/images/gym-warrior-4.avif"
                alt="Entrenamiento espartano"
                className="w-full h-full object-cover"
              />

              {/* Spartan-inspired overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-raisin/80 via-transparent to-transparent"></div>

              {/* Red Spartan shield-inspired corner decorations */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-barn"></div>
              <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-barn"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-barn"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-barn"></div>

              {/* Spartan shield emblem overlay */}
              <div className="absolute bottom-6 left-0 right-0 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-barn/20 border-2 border-barn/50 backdrop-blur-sm mx-auto">
                  <Dumbbell className="w-8 h-8 text-barn" />
                </div>
                <Text variant="h4" color="primary" className="mt-4 uppercase tracking-widest">
                  ENTRENA DURO
                </Text>
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="lg:col-span-3 grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: -90 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="bg-raisin border-4 border-bean rounded-lg p-8 h-full hover:border-barn transition-all duration-500 relative overflow-hidden">
                  {/* Background glow */}
                  <motion.div className="absolute inset-0 bg-gradient-to-br from-barn/5 via-transparent to-bean/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Icon */}
                  <div className="relative z-10 mb-6">
                    <motion.div
                      className={`w-16 h-16 border-4 border-${feature.color} rounded-lg flex items-center justify-center mx-auto relative`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <feature.icon className={`w-8 h-8 text-${feature.color}`} />
                      <motion.div
                        className={`absolute inset-0 border border-${feature.color} rounded-lg`}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <Text variant="h5" className="mb-4 uppercase font-bold tracking-wider">
                      {feature.title}
                    </Text>
                    <Text variant="body" color="secondary" className="text-balance leading-relaxed">
                      {feature.description}
                    </Text>
                  </div>

                  {/* Corner decorations - Spartan shield inspired */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-barn opacity-70" />
                  <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-barn opacity-70" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-barn opacity-70" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-barn opacity-70" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section - Spartan battle statistics style */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-raisin border-4 border-barn rounded-lg p-8 relative overflow-hidden"
        >
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-barn/5 via-transparent to-bean/5" />
          <div className="absolute inset-0 bg-[url('/images/spartan-pattern.svg')] bg-repeat opacity-2"></div>

          {/* Header */}
          <div className="relative z-10 text-center mb-12">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <div className="w-16 h-16 border-4 border-barn rounded-lg flex items-center justify-center">
                  <Shield className="w-8 h-8 text-barn" />
                </div>
              </motion.div>
              <Text variant="h3" color="primary" className="uppercase tracking-widest">
                GLORIA ESPARTANA
              </Text>
            </div>
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-barn to-transparent" />
          </div>

          {/* Stats Grid */}
          <div className="relative z-10 grid grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="group"
              >
                <div className="mb-4">
                  <stat.icon className="w-10 h-10 text-barn mx-auto mb-4" />
                  <motion.div
                    className="text-4xl md:text-5xl font-bold text-gradient-primary mb-2"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {stat.number}
                  </motion.div>
                </div>
                <Text variant="caption" color="secondary" className="uppercase tracking-widest font-bold">
                  {stat.label}
                </Text>
              </motion.div>
            ))}
          </div>

          {/* Spartan shield-inspired corner decorations */}
          <div className="absolute top-4 left-4 w-12 h-12 border-l-4 border-t-4 border-barn opacity-70" />
          <div className="absolute top-4 right-4 w-12 h-12 border-r-4 border-t-4 border-barn opacity-70" />
          <div className="absolute bottom-4 left-4 w-12 h-12 border-l-4 border-b-4 border-barn opacity-70" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-r-4 border-b-4 border-barn opacity-70" />
        </motion.div>
      </div>
    </section>
  )
}
