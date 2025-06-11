"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Text from "@/components/atoms/Text"
import { Award, Users, Clock, Target, Shield } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Award,
      title: "Entrenadores Elite",
      description: "Profesionales certificados con metodologías de entrenamiento de vanguardia.",
      color: "barn",
    },
    {
      icon: Users,
      title: "Comunidad Warrior",
      description: "Únete a una hermandad de guerreros comprometidos con la excelencia.",
      color: "bean",
    },
    {
      icon: Clock,
      title: "Acceso Total",
      description: "Entrena cuando quieras, como quieras. Sin límites, sin excusas.",
      color: "barn",
    },
    {
      icon: Target,
      title: "Resultados Garantizados",
      description: "Planes científicamente diseñados para maximizar tu potencial.",
      color: "bean",
    },
  ]

  const stats = [
    { number: "500+", label: "Guerreros Activos", icon: Users },
    { number: "15", label: "Entrenadores Elite", icon: Award },
    { number: "24/7", label: "Acceso Ilimitado", icon: Clock },
  ]

  return (
    <section id="about" className="section-padding bg-gradient-dark relative overflow-hidden" ref={ref}>
      {/* Background effects */}
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
          <Text variant="h2" color="primary" className="mb-6">
            EL CÓDIGO
          </Text>
          <Text variant="h2" className="mb-8 text-gradient-primary">
            GYMSPARTA
          </Text>
          <div className="w-32 h-1 bg-gradient-to-r from-barn via-bean to-barn mx-auto mb-8" />
          <Text variant="lead" color="secondary" className="max-w-3xl mx-auto leading-relaxed">
            No somos solo un gimnasio. Somos una forja donde se crean guerreros urbanos. Donde cada repetición es un
            paso hacia la grandeza.
          </Text>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: -90 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="bg-raisin border border-bean rounded-lg p-8 h-full hover:border-barn transition-all duration-500 relative overflow-hidden">
                {/* Background glow */}
                <motion.div className="absolute inset-0 bg-gradient-to-br from-barn/5 via-transparent to-bean/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <motion.div
                    className={`w-16 h-16 border-2 border-${feature.color} rounded-lg flex items-center justify-center mx-auto relative`}
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
                  <Text variant="h5" className="mb-4">
                    {feature.title}
                  </Text>
                  <Text variant="body" color="secondary" className="text-balance leading-relaxed">
                    {feature.description}
                  </Text>
                </div>

                {/* Corner decorations */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-barn opacity-50" />
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-barn opacity-50" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-barn opacity-50" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-barn opacity-50" />

                {/* Scan line effect */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-0.5 bg-barn opacity-0 group-hover:opacity-100"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-raisin border border-bean rounded-lg p-8 relative overflow-hidden"
        >
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-barn/5 via-transparent to-bean/5" />

          {/* Header */}
          <div className="relative z-10 text-center mb-12">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <div className="w-12 h-12 border-2 border-barn rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-barn" />
                </div>
              </motion.div>
              <Text variant="h3" color="primary">
                ESTADÍSTICAS DE COMBATE
              </Text>
            </div>
            <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-barn to-transparent" />
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
                  <stat.icon className="w-8 h-8 text-barn mx-auto mb-2" />
                  <motion.div
                    className="text-4xl md:text-5xl font-bold text-gradient-primary mb-2"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {stat.number}
                  </motion.div>
                </div>
                <Text variant="caption" color="secondary" className="uppercase tracking-wider">
                  {stat.label}
                </Text>
              </motion.div>
            ))}
          </div>

          {/* Corner decorations */}
          <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-barn opacity-50" />
          <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-barn opacity-50" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-barn opacity-50" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-barn opacity-50" />
        </motion.div>
      </div>
    </section>
  )
}
