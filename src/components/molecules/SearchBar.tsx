"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import Input from "@/components/atoms/Input"
import Button from "@/components/atoms/Button"
import { Search } from "lucide-react"

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
      className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500 w-5 h-5" />
        <Input
          type="text"
          placeholder={placeholder}
          value={document}
          onChange={(e) => setDocument(e.target.value)}
          className="pl-12"
          required
        />
      </div>
      <Button type="submit" size="md">
        Buscar Rutina
      </Button>
    </motion.form>
  )
}
