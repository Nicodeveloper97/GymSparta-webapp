"use client"

import { motion } from "framer-motion"
import Text from "../atoms/Text"

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 bg-neutral-50 flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="w-16 h-16 mx-auto mb-6">
            <div className="w-full h-full bg-neutral-900 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-white rounded-full" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Text variant="h3" className="mb-4">
            GymSparta
          </Text>
          <Text variant="body" color="secondary" className="mb-8">
            Preparando tu experiencia premium
          </Text>
        </motion.div>

        <motion.div
          className="w-32 h-1 bg-neutral-200 rounded-full mx-auto overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            className="h-full bg-neutral-900 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, delay: 0.4, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}
