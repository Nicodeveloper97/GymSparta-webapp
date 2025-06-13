"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import Input from "@/components/atoms/Input"
import Button from "@/components/atoms/Button"
import { Search, Shield, Lock } from "lucide-react"

interface SearchBarProps {
  onSearch: (document: string) => void
  placeholder?: string
}

export default function SearchBar({ onSearch, placeholder = "Ingresa tu número de documento" }: SearchBarProps) {
  const [document, setDocument] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (document.trim()) {
      onSearch(document.trim())
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="relative">
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
          <Shield className="w-5 h-5 text-barn" />
        </div>
        <Input
          type="text"
          placeholder={placeholder}
          value={document}
          onChange={(e) => setDocument(e.target.value)}
          className="pl-14 bg-eerie border-4 border-bean hover:border-barn focus:border-barn transition-all duration-300 text-center font-mono text-lg tracking-wider"
          required
        />
        <motion.div
          className="absolute inset-0 border border-barn/20 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            boxShadow: "0 0 20px rgba(115, 1, 1, 0.3)",
          }}
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full group relative overflow-hidden border-4 border-barn"
      >
        <span className="flex items-center justify-center space-x-3 relative z-10">
          <Search className="w-5 h-5 mr-2" />
          <span className="font-bold tracking-wider uppercase">Acceder Al Combate</span>
        </span>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-barn via-bean to-barn opacity-0 group-hover:opacity-20"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </Button>

      <div className="text-center">
        <span className="inline-flex items-center text-sm text-neutral-400 uppercase tracking-wider">
          <Lock className="w-4 h-4 mr-2 text-barn" />
          ACCESO RESTRINGIDO • SOLO GUERREROS
        </span>
      </div>
    </motion.form>
  )
}
