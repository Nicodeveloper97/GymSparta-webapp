"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Text from "../atoms/Text"
import ContactForm from "../molecules/ContactForm"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const contactInfo = [
    {
      icon: MapPin,
      title: "Ubicación",
      info: "Av. Principal 123, Ciudad Fitness",
    },
    {
      icon: Phone,
      title: "Teléfono",
      info: "+58 280-433-4435",
    },
    {
      icon: Mail,
      title: "Email",
      info: "info@gymsparta.com",
    },
    {
      icon: Clock,
      title: "Horarios",
      info: "24 horas, 7 días a la semana",
    },
  ]

  return (
    <section id="contact" className="section-padding bg-white" ref={ref}>
      <div className="container-wide px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Text variant="h2" className="mb-6 text-balance">
            Contáctanos
          </Text>
          <div className="divider mb-6" />
          <Text variant="lead" color="secondary" className="max-w-2xl mx-auto text-balance">
            ¿Tienes preguntas? ¿Quieres conocer más sobre nuestros servicios? Contáctanos y te responderemos a la
            brevedad.
          </Text>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Text variant="h3" className="mb-8">
              Información de Contacto
            </Text>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-neutral-700" />
                  </div>
                  <div>
                    <Text variant="body" className="font-medium mb-1">
                      {item.title}
                    </Text>
                    <Text variant="caption" color="secondary">
                      {item.info}
                    </Text>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="card p-8">
              <Text variant="h3" className="mb-8">
                Envíanos un Mensaje
              </Text>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
