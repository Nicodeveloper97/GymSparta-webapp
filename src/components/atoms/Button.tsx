"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
  variant?: "primary" | "secondary" | "ghost" | "link" | "gold"
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
    "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:ring-offset-dark-800 disabled:opacity-50 disabled:cursor-not-allowed"

  const variantClasses = {
    primary: "bg-gradient-primary text-flash hover:shadow-lg hover:shadow-barn/25 hover:scale-105",
    secondary: "bg-raisin text-flash border border-barn hover:bg-barn hover:border-bean",
    ghost: "text-flash hover:text-barn hover:bg-raisin",
    link: "text-barn underline-offset-4 hover:underline hover:text-primary-500",
    gold: "bg-gradient-accent text-flash hover:shadow-lg hover:shadow-bean/25 hover:scale-105 font-semibold",
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
