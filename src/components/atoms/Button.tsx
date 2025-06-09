"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
  variant?: "primary" | "secondary" | "ghost" | "link"
  size?: "sm" | "md" | "lg"
  onClick?: () => void
  type?: "button" | "submit"
  disabled?: boolean
  className?: string
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  type = "button",
  disabled = false,
  className = "",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"

  const variantClasses = {
    primary: "bg-neutral-900 text-white hover:bg-neutral-800 shadow-sm",
    secondary: "bg-white text-neutral-900 border border-neutral-200 hover:border-neutral-300 shadow-sm",
    ghost: "text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100",
    link: "text-neutral-900 underline-offset-4 hover:underline",
  }

  const sizeClasses = {
    sm: "px-4 py-2 text-sm rounded-md",
    md: "px-6 py-3 text-base rounded-lg",
    lg: "px-8 py-4 text-lg rounded-lg",
  }

  return (
    <motion.button
      whileHover={{ scale: variant === "link" ? 1 : 1.02 }}
      whileTap={{ scale: variant === "link" ? 1 : 0.98 }}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </motion.button>
  )
}
