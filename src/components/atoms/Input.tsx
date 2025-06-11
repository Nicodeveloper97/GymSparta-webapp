"use client"

import type React from "react"
import { forwardRef } from "react"

interface InputProps {
  type?: string
  placeholder?: string
  value?: string | number
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  required?: boolean
  name?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", placeholder, value, onChange, className = "", required = false, name }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value || ""}
        onChange={onChange}
        required={required}
        className={`w-full px-4 py-3 bg-raisin border border-bean rounded-lg text-flash placeholder-neutral-400 focus:outline-none focus:border-barn focus:ring-2 focus:ring-barn focus:ring-opacity-50 transition-all duration-300 ${className}`}
      />
    )
  },
)

Input.displayName = "Input"

export default Input
