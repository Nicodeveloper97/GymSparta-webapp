"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Text from "@/components/atoms/Text"
import ContactForm from "@/components/molecules/ContactForm"
import { MapPin, Phone, Mail, Clock, Shield, Sword } from "lucide-react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const contactInfo = [
    {
      icon: MapPin,
      title: "BASE DE OPERACIONES",
      info: "Sector 7, Zona Urbana Elite",
      color: "barn",
    },
    {
      icon: Phone,
      title: "LÍNEA DIRECTA",
      info: "+58 280-433-4435",
      color: "barn",
    },
    {
      icon: Mail,
      title: "CANAL ENCRIPTADO",
      info: "comando@gymsparta.com",
      color: "barn",
    },
    {
      icon: Clock,
      title: "OPERATIVO 24/7",
      info: "Sin límites, sin excusas",
      color: "barn",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-eerie relative overflow-hidden" ref={ref}>
      {/* Spartan-inspired background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/images/spartan-pattern.svg')] bg-repeat opacity-5"></div>
      </div>
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="absolute inset-0 hex-pattern" />

      <div className="container-wide px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <Text variant="h2" color="primary" className="mb-6 flex items-center justify-center">
            <Sword className="w-8 h-8 mr-3 text-barn" /> ESTABLECER
          </Text>
          <Text variant="h2" className="mb-8 text-gradient-primary uppercase font-bold tracking-widest">
            COMUNICACIÓN
          </Text>
          <div className="w-32 h-1 bg-gradient-to-r from-barn via-bean to-barn mx-auto mb-8" />
          <Text variant="lead" color="secondary" className="max-w-3xl mx-auto leading-relaxed uppercase">
            ¿LISTO PARA UNIRTE A LA REVOLUCIÓN? ESTABLECE CONTACTO CON NUESTRO COMANDO CENTRAL. TU TRANSFORMACIÓN
            COMIENZA CON UN SIMPLE MENSAJE.
          </Text>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Text variant="h3" color="primary" className="mb-12 uppercase tracking-widest">
              CANALES DE COMUNICACIÓN
            </Text>

            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="group"
                >
                  <div className="bg-raisin border-4 border-bean rounded-lg p-6 hover:border-barn transition-all duration-500 relative overflow-hidden">
                    {/* Background glow */}
                    <motion.div className="absolute inset-0 bg-gradient-to-br from-barn/5 via-transparent to-bean/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="flex items-center space-x-6 relative z-10">
                      <motion.div
                        className={`w-16 h-16 border-4 border-barn rounded-lg flex items-center justify-center relative`}
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <item.icon className={`w-8 h-8 text-barn`} />
                        <motion.div
                          className={`absolute inset-0 border border-barn rounded-lg`}
                          animate={{ rotate: 360 }}
                          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        />
                      </motion.div>

                      <div className="flex-1">
                        <Text variant="h4" color="primary" className="mb-2 uppercase tracking-wider">
                          {item.title}
                        </Text>
                        <Text variant="body" color="secondary">
                          {item.info}
                        </Text>
                      </div>
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
            
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-raisin border-4 border-barn rounded-lg p-8 relative overflow-hidden">
              {/* Background effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-barn/5 via-transparent to-bean/5" />

              {/* Header */}
              <div className="relative z-10 mb-8">
                <div className="flex items-center space-x-4 mb-6">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <div className="w-16 h-16 border-4 border-barn rounded-lg flex items-center justify-center">
                      <Shield className="w-8 h-8 text-barn" />
                    </div>
                  </motion.div>
                  <Text variant="h3" color="primary" className="uppercase tracking-widest">
                    TERMINAL DE CONTACTO
                  </Text>
                </div>
                <Text variant="body" color="secondary" className="mb-6">
                  COMPLETA EL FORMULARIO PARA ESTABLECER COMUNICACIÓN DIRECTA CON NUESTRO COMANDO.
                </Text>
                <div className="w-full h-0.5 bg-gradient-to-r from-barn via-bean to-transparent" />
              </div>

              {/* Form */}
              <div className="relative z-10">
                <ContactForm />
              </div>

              {/* Corner decorations - Spartan shield inspired */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 border-barn opacity-70" />
              <div className="absolute top-4 right-4 w-8 h-8 border-r-4 border-t-4 border-barn opacity-70" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 border-barn opacity-70" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 border-barn opacity-70" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
