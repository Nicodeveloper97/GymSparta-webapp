"use client"

import { motion } from "framer-motion"
import Text from "@/components/atoms/Text"
import type { Exercise } from "@/types"

interface RoutineCardProps {
  day: string
  exercises: Exercise[]
  index: number
}

export default function RoutineCard({ day, exercises, index }: RoutineCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-raisin rounded-lg border border-bean shadow-lg p-6 hover:border-barn transition-all duration-300"
    >
      <Text variant="h5" className="mb-4 text-flash">
        {day}
      </Text>
      <div className="space-y-4">
        {exercises.map((exercise, exerciseIndex) => (
          <div key={exerciseIndex} className="border-l-2 border-barn pl-4">
            <Text variant="body" className="font-medium mb-1">
              {exercise.name}
            </Text>
            <Text variant="caption" color="muted" className="mb-1">
              {exercise.sets} series × {exercise.reps} repeticiones
            </Text>
            {exercise.notes && (
              <Text variant="caption" color="secondary" className="italic">
                Nota: {exercise.notes}
              </Text>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  )
}
