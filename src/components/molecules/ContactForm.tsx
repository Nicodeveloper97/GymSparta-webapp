"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import Input from "@/components/atoms/Input"
import Button from "@/components/atoms/Button"
import { Send, User, Mail, Phone, MessageSquare, Shield } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappNumber = "2804334435"
    const message = `🔥 NUEVO GUERRERO DETECTADO 🔥\n\n👤 NOMBRE: ${formData.name}\n📧 EMAIL: ${formData.email}\n📱 TELÉFONO: ${formData.phone}\n\n💬 MENSAJE:\n${formData.message}\n\n🏋️‍♂️ GYMSPARTA - FORJANDO LEYENDAS URBANAS`
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const fields = [
    { name: "name", type: "text", placeholder: "NOMBRE DE GUERRERO", icon: User, required: true },
    { name: "email", type: "email", placeholder: "EMAIL ENCRIPTADO", icon: Mail, required: true },
    { name: "phone", type: "tel", placeholder: "LÍNEA DIRECTA", icon: Phone, required: true },
  ]

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {fields.map((field, index) => (
        <motion.div
          key={field.name}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative group"
        >
          <div className="relative">
            <field.icon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-barn z-10" />
            <Input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name as keyof typeof formData]}
              onChange={handleChange}
              required={field.required}
              className="pl-14 bg-eerie border-4 border-bean hover:border-barn focus:border-barn transition-all duration-300"
            />
            <motion.div
              className="absolute inset-0 border border-barn/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                boxShadow: "0 0 10px rgba(115, 1, 1, 0.3)",
              }}
            />
          </div>
        </motion.div>
      ))}

      {/* Message textarea */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="relative group"
      >
        <div className="relative">
          <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-barn z-10" />
          <textarea
            name="message"
            placeholder="MENSAJE PARA EL COMANDO..."
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full pl-14 pr-4 py-3 bg-eerie border-4 border-bean rounded-lg text-flash placeholder-neutral-400 focus:outline-none focus:border-barn hover:border-barn transition-all duration-300 resize-none"
          />
          <motion.div
            className="absolute inset-0 border border-barn/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              boxShadow: "0 0 10px rgba(115, 1, 1, 0.3)",
            }}
          />
        </div>
      </motion.div>

      {/* Submit button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="pt-4"
      >
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full group relative overflow-hidden border-4 border-barn"
        >
          <span className="flex items-center justify-center space-x-3 relative z-10">
            <Send className="w-5 h-5 mr-2" />
            <span className="uppercase font-bold tracking-wider">ENVIAR MENSAJE DE BATALLA</span>
          </span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-barn via-bean to-barn opacity-0 group-hover:opacity-20"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
        </Button>
      </motion.div>

      {/* Security notice */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-center pt-4"
      >
        <div className="inline-flex items-center text-sm text-neutral-400 uppercase tracking-wider">
          <Shield className="w-4 h-4 mr-2 text-barn" />
          CONEXIÓN ENCRIPTADA • RESPUESTA EN 24H • PROTOCOLO SEGURO
        </div>
      </motion.div>
    </form>
  )
}
