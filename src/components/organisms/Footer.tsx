"use client"

import { motion } from "framer-motion"
import Text from "@/components/atoms/Text"
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, label: "Instagram" },
    { icon: Twitter, label: "Twitter" },
    { icon: Facebook, label: "Facebook" },
    { icon: Youtube, label: "YouTube" },
  ]

  const quickLinks = ["Inicio", "Nosotros", "Servicios", "Contacto"]
  const services = ["Entrenamiento Personal", "Clases Grupales", "Nutrición Deportiva", "Evaluación Física"]

  return (
    <footer className="bg-eerie text-flash py-16">
      <div className="container-wide px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 border border-neutral-900 rounded-full" />
              </div>
              <Text variant="h5" className="font-serif font-medium text-white">
                GymSparta
              </Text>
            </div>
            <Text variant="body" className="text-neutral-300 mb-6 leading-relaxed">
              Transformando vidas a través del fitness desde 2014. Tu mejor versión te está esperando.
            </Text>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.button
                  key={social.label}
                  className="w-10 h-10 bg-raisin rounded-lg flex items-center justify-center text-neutral-400 hover:text-flash hover:bg-barn transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Text variant="h5" className="text-white mb-6">
              Enlaces Rápidos
            </Text>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item}>
                  <button className="text-neutral-300 hover:text-white transition-colors duration-200">{item}</button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Text variant="h5" className="text-white mb-6">
              Servicios
            </Text>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-neutral-300">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Text variant="h5" className="text-white mb-6">
              Contacto
            </Text>
            <div className="space-y-3 text-neutral-300">
              <p>Av. Principal 123</p>
              <p>Ciudad Fitness</p>
              <p>+58 280-433-4435</p>
              <p>info@gymsparta.com</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-neutral-800 pt-8 text-center"
        >
          <Text variant="caption" className="text-neutral-400">
            © 2024 GymSparta. Todos los derechos reservados.
          </Text>
        </motion.div>
      </div>
    </footer>
  )
}
