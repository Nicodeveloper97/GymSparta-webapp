"use client"

import { motion } from "framer-motion"
import Text from "@/components/atoms/Text"
import { Instagram, Twitter, Youtube, Github, Shield } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, label: "Instagram", color: "barn" },
    { icon: Twitter, label: "Twitter", color: "barn" },
    { icon: Youtube, label: "YouTube", color: "barn" },
    { icon: Github, label: "GitHub", color: "barn" },
  ]

  const quickLinks = ["PROTOCOLO INICIO", "MISIÓN NOSOTROS", "ACCESO RUTINAS", "CANAL CONTACTO"]

  const services = ["ENTRENAMIENTO ELITE", "COMBATE URBANO", "NUTRICIÓN TÁCTICA", "EVALUACIÓN BIOMÉTRICA"]

  return (
    <footer className="bg-eerie border-t-4 border-barn/30 py-16 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 cyber-grid opacity-5" />
      <div className="absolute inset-0 hex-pattern" />

      <div className="container-wide px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="flex items-center space-x-4 mb-6">
              <motion.div
                className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-barn"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <img src="/images/Logo.jpg" alt="GymSparta Logo" className="w-full h-full object-cover" />
                <motion.div
                  className="absolute inset-0 border border-barn/50 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
              </motion.div>
              <Text variant="h3" className="text-gradient-primary uppercase tracking-widest">
                GYMSPARTA
              </Text>
            </div>

            <Text variant="body" color="secondary" className="mb-6 leading-relaxed">
              FORJANDO GUERREROS URBANOS DESDE 2014. EN LAS CALLES DE CONCRETO Y ACERO, CREAMOS LEYENDAS QUE TRASCIENDEN
              LOS LÍMITES DE LO POSIBLE.
            </Text>

            <div className="flex items-center space-x-4">
              <Shield className="w-6 h-6 text-barn" />
              <Text variant="caption" color="primary" className="uppercase tracking-wider">
                CERTIFICADO ELITE • TECNOLOGÍA MILITAR • RESULTADOS GARANTIZADOS
              </Text>
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Text variant="h4" color="primary" className="mb-6 uppercase tracking-widest">
              NAVEGACIÓN
            </Text>
            <ul className="space-y-3">
              {quickLinks.map((item,) => (
                <motion.li key={item} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <button className="text-flash hover:text-barn transition-colors duration-300 font-urban uppercase tracking-wide text-sm relative group">
                    {item}
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-barn origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Text variant="h4" color="primary" className="mb-6 uppercase tracking-widest">
              SERVICIOS
            </Text>
            <ul className="space-y-3">
              {services.map((service,) => (
                <motion.li
                  key={service}
                  className="flex items-center space-x-2"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-2 h-2 bg-barn rounded-full" />
                  <Text variant="caption" color="secondary" className="uppercase tracking-wide">
                    {service}
                  </Text>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social media and bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-barn/30 pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            {/* Social links */}
            <div className="flex items-center space-x-6">
              <Text variant="caption" color="primary" className="uppercase tracking-wider mr-4">
                SÍGUENOS EN:
              </Text>
              {socialLinks.map((social,) => (
                <motion.button
                  key={social.label}
                  className={`w-12 h-12 border-2 border-barn rounded-lg flex items-center justify-center text-barn hover:bg-barn hover:text-eerie transition-all duration-300 group relative overflow-hidden`}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <social.icon className="w-5 h-5 relative z-10" />
                  <motion.div
                    className={`absolute inset-0 bg-barn opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  />
                </motion.button>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <Text variant="caption" color="secondary" className="mb-2">
                © 2024 GYMSPARTA CORPORATION
              </Text>
              <Text variant="caption" color="muted" className="uppercase tracking-wider">
                TODOS LOS DERECHOS RESERVADOS • TECNOLOGÍA CYBERFITNESS
              </Text>
            </div>
          </div>
        </motion.div>

        {/* Final decoration */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-barn to-transparent mb-4" />
          <Text variant="caption" color="accent" className="uppercase tracking-widest">
            FORJANDO EL FUTURO • UNA REP A LA VEZ
          </Text>
        </motion.div>
      </div>
    </footer>
  )
}
