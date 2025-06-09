"use client"

import { motion } from "framer-motion"
import Text from "../atoms/Text"
import type { Exercise } from "../../types"

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
      className="card card-hover p-6"
    >
      <Text variant="h5" className="mb-4 text-neutral-900">
        {day}
      </Text>
      <div className="space-y-4">
        {exercises.map((exercise, exerciseIndex) => (
          <div key={exerciseIndex} className="border-l-2 border-neutral-200 pl-4">
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
