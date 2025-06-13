"use client"

import { motion } from "framer-motion"
import Text from "@/components/atoms/Text"

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 bg-gradient-dark flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        {/* Logo animado */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="w-32 h-32 mx-auto mb-6 relative">
            <motion.div
              className="w-full h-full rounded-full flex items-center justify-center relative overflow-hidden"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <img src="/images/Logo.jpg" alt="GymSparta Logo" className="w-full h-full object-cover" />
              <motion.div
                className="absolute inset-0 border-4 border-barn rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
            </motion.div>
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(115, 1, 1, 0.3)",
                  "0 0 40px rgba(115, 1, 1, 0.6)",
                  "0 0 20px rgba(115, 1, 1, 0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
        </motion.div>

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Text variant="h3" className="mb-4 text-gradient-primary">
            GymSparta
          </Text>
          <Text variant="body" color="secondary" className="mb-8">
            Forjando guerreros urbanos...
          </Text>
        </motion.div>

        {/* Barra de progreso */}
        <motion.div
          className="w-64 h-2 bg-raisin rounded-full mx-auto overflow-hidden border border-bean"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            className="h-full bg-gradient-primary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5, delay: 0.4, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Texto de carga */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-6">
          <Text variant="caption" color="accent" className="uppercase tracking-wider">
            Preparando tu experiencia de entrenamiento
          </Text>
        </motion.div>
      </div>
    </motion.div>
  )
}
