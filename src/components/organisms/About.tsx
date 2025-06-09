"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Text from "../atoms/Text"
import { Award, Users, Clock, Target } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Award,
      title: "Entrenadores Expertos",
      description: "Profesionales certificados con años de experiencia en fitness y bienestar.",
    },
    {
      icon: Users,
      title: "Comunidad Enfocada",
      description: "Únete a una comunidad de apoyo que motiva e inspira tu viaje fitness.",
    },
    {
      icon: Clock,
      title: "Horarios Flexibles",
      description: "Acceso 24/7 a nuestras instalaciones, adaptándose a tu horario y estilo de vida.",
    },
    {
      icon: Target,
      title: "Planes Personalizados",
      description: "Planes de entrenamiento y nutrición personalizados para tus objetivos específicos.",
    },
  ]

  return (
    <section id="about" className="section-padding bg-white" ref={ref}>
      <div className="container-wide px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Text variant="h2" className="mb-6 text-balance">
            Por Qué Elegir GymSparta
          </Text>
          <div className="divider mb-6" />
          <Text variant="lead" color="secondary" className="max-w-2xl mx-auto text-balance">
            Combinamos instalaciones de vanguardia con atención personalizada para crear una experiencia fitness
            inigualable.
          </Text>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-neutral-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-neutral-700" />
              </div>
              <Text variant="h5" className="mb-4">
                {feature.title}
              </Text>
              <Text variant="body" color="secondary" className="text-balance">
                {feature.description}
              </Text>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-3 gap-8 text-center"
        >
          {[
            { number: "500+", label: "Miembros Activos" },
            { number: "15", label: "Entrenadores Expertos" },
            { number: "24/7", label: "Horas de Acceso" },
          ].map((stat, index) => (
            <div key={index}>
              <Text variant="h3" className="mb-2">
                {stat.number}
              </Text>
              <Text variant="caption" color="secondary">
                {stat.label}
              </Text>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
