import type React from "react"
import type { ReactNode } from "react"

interface TextProps {
  children: ReactNode
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "body" | "caption" | "lead"
  color?: "primary" | "secondary" | "muted" | "accent"
  className?: string
  as?: keyof React.JSX.IntrinsicElements
}

export default function Text({ children, variant = "body", color = "primary", className = "", as }: TextProps) {
  const variantClasses = {
    h1: "text-4xl md:text-6xl lg:text-7xl font-serif font-light leading-tight tracking-tight",
    h2: "text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-tight tracking-tight",
    h3: "text-2xl md:text-3xl font-serif font-medium leading-tight",
    h4: "text-xl md:text-2xl font-serif font-medium leading-tight",
    h5: "text-lg md:text-xl font-serif font-medium",
    body: "text-base md:text-lg leading-relaxed",
    caption: "text-sm leading-normal",
    lead: "text-lg md:text-xl leading-relaxed font-light",
  }

  const colorClasses = {
    primary: "text-neutral-900",
    secondary: "text-neutral-700",
    muted: "text-neutral-500",
    accent: "text-accent-600",
  }

  const Component = as || (variant.startsWith("h") ? (variant as keyof React.JSX.IntrinsicElements) : "p")

  return <Component className={`${variantClasses[variant]} ${colorClasses[color]} ${className}`}>{children}</Component>
}
