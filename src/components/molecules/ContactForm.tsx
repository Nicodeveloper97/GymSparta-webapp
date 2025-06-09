"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Input from "../atoms/Input"
import Button from "../atoms/Button"
import { Send } from "lucide-react"

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
    const message = `Hola! Mi nombre es ${formData.name}. Email: ${formData.email}. Teléfono: ${formData.phone}. Mensaje: ${formData.message}`
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-lg mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Input
        type="text"
        name="name"
        placeholder="Tu nombre completo"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <Input
        type="email"
        name="email"
        placeholder="Tu correo electrónico"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <Input
        type="tel"
        name="phone"
        placeholder="Tu número de teléfono"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="¿En qué podemos ayudarte?"
        value={formData.message}
        onChange={handleChange}
        required
        rows={4}
        className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-lg text-neutral-900 placeholder-neutral-500 focus:outline-none focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900 focus:ring-opacity-10 transition-all duration-200 resize-none"
      />
      <Button type="submit" size="lg" className="w-full">
        <Send className="w-5 h-5 mr-2" />
        Enviar Mensaje
      </Button>
    </motion.form>
  )
}
