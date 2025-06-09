"use client"

import type React from "react"
import { forwardRef } from "react"

interface InputProps {
  type?: string
  placeholder?: string
  value?: string
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
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full px-4 py-3 bg-white border border-neutral-200 rounded-lg text-neutral-900 placeholder-neutral-500 focus:outline-none focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900 focus:ring-opacity-10 transition-all duration-200 ${className}`}
      />
    )
  },
)

Input.displayName = "Input"

export default Input
