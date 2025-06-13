"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Text from "@/components/atoms/Text"
import Button from "@/components/atoms/Button"
import { Calendar, ChevronLeft, ChevronRight, CheckCircle, Circle, Shield, Sword, Flame, Trophy } from "lucide-react"
import type { DayRoutine } from "@/types"

interface RoutineViewerProps {
  routine: DayRoutine[]
}

export default function RoutineViewer({ routine }: RoutineViewerProps) {
  const [selectedDay, setSelectedDay] = useState(0)
  const [completedExercises, setCompletedExercises] = useState<Record<string, boolean>>({})

  const toggleExercise = (exerciseKey: string) => {
    setCompletedExercises((prev) => ({
      ...prev,
      [exerciseKey]: !prev[exerciseKey],
    }))
  }

  const currentDay = routine[selectedDay]
  const completedCount = Object.values(completedExercises).filter(Boolean).length
  const allCompleted = currentDay && completedCount === currentDay.exercises.length && completedCount > 0

  // Función para marcar el día como finalizado y reiniciar los checks
  const finishDay = () => {
    // Crear un objeto con todas las claves actuales pero con valores false
    const resetExercises: Record<string, boolean> = {}
    Object.keys(completedExercises).forEach((key) => {
      if (key.startsWith(`${selectedDay}-`)) {
        resetExercises[key] = false
      } else {
        resetExercises[key] = completedExercises[key]
      }
    })

    setCompletedExercises(resetExercises)
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Day Selector with Spartan theme */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <div className="bg-raisin border-4 border-bean rounded-lg p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-barn/5 via-transparent to-bean/5" />

          <div className="relative z-10">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Calendar className="w-6 h-6 text-barn" />
              <Text variant="h4" color="primary" className="uppercase tracking-widest">
                SELECCIONA TU BATALLA
              </Text>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedDay(Math.max(0, selectedDay - 1))}
                disabled={selectedDay === 0}
                className="border-2 border-barn"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <div className="flex flex-wrap justify-center gap-2">
                {routine.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setSelectedDay(index)}
                    className={`w-12 h-12 rounded-lg border-4 font-bold transition-all duration-300 ${
                      selectedDay === index
                        ? "bg-barn border-barn text-flash"
                        : "bg-raisin border-bean text-flash hover:border-barn"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {index + 1}
                  </motion.button>
                ))}
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedDay(Math.min(routine.length - 1, selectedDay + 1))}
                disabled={selectedDay === routine.length - 1}
                className="border-2 border-barn"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Progress - Spartan battle progress */}
            <div className="mt-6 text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Shield className="w-4 h-4 text-barn" />
                <Text variant="caption" color="secondary" className="uppercase tracking-widest">
                  Progreso del Guerrero: {completedCount} / {currentDay?.exercises.length || 0}
                </Text>
                <Shield className="w-4 h-4 text-barn" />
              </div>
              <div className="w-full bg-bean/50 rounded-full h-2 mt-2 border border-bean/30">
                <motion.div
                  className="bg-barn h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{
                    width: currentDay ? `${(completedCount / currentDay.exercises.length) * 100}%` : "0%",
                  }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </div>

          {/* Spartan shield-inspired corner decorations */}
          <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-barn opacity-70" />
          <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-barn opacity-70" />
          <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-barn opacity-70" />
          <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-barn opacity-70" />
        </div>
      </motion.div>

      {/* Current Day Display with Spartan theme */}
      <AnimatePresence mode="wait">
        {currentDay && (
          <motion.div
            key={selectedDay}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-raisin border-4 border-bean rounded-lg p-8 relative overflow-hidden"
          >
            {/* Background effects - Spartan inspired */}
            <div className="absolute inset-0 bg-gradient-to-br from-barn/5 via-transparent to-bean/5" />
            <div className="absolute inset-0 bg-spartan-pattern"></div>

            {/* Header with Spartan styling */}
            <div className="relative z-10 mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <div className="w-16 h-16 border-4 border-barn rounded-lg flex items-center justify-center">
                    <Sword className="w-8 h-8 text-barn" />
                  </div>
                </motion.div>
                <Text variant="h3" color="primary" className="uppercase tracking-widest">
                  {currentDay.day}
                </Text>
              </div>
              <div className="w-full h-1 bg-gradient-to-r from-barn via-bean to-transparent" />
            </div>

            {/* Exercises with Spartan battle-plan styling */}
            <div className="relative z-10 space-y-6">
              {currentDay.exercises.map((exercise, exerciseIndex) => {
                const exerciseKey = `${selectedDay}-${exerciseIndex}`
                const isCompleted = completedExercises[exerciseKey]

                return (
                  <motion.div
                    key={exerciseIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: exerciseIndex * 0.1 }}
                    className={`border-l-4 pl-6 py-4 transition-all duration-300 ${
                      isCompleted ? "border-barn bg-barn/10" : "border-bean hover:border-barn"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <Text
                            variant="h5"
                            className={`font-semibold uppercase tracking-wide ${isCompleted ? "line-through text-barn" : "text-flash"}`}
                          >
                            {exercise.name}
                          </Text>
                          <motion.button
                            onClick={() => toggleExercise(exerciseKey)}
                            className="text-barn hover:text-flash transition-colors duration-200"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            {isCompleted ? <CheckCircle className="w-6 h-6" /> : <Circle className="w-6 h-6" />}
                          </motion.button>
                        </div>

                        <div className="flex items-center space-x-6 mb-3">
                          <div className="bg-barn/20 border-2 border-barn/30 rounded px-3 py-1">
                            <Text variant="caption" color="primary" className="font-mono font-bold tracking-wider">
                              {exercise.sets} SERIES
                            </Text>
                          </div>
                          <div className="bg-bean/20 border-2 border-bean/30 rounded px-3 py-1">
                            <Text variant="caption" color="accent" className="font-mono font-bold tracking-wider">
                              {exercise.reps} REPS
                            </Text>
                          </div>
                        </div>

                        {exercise.notes && (
                          <div className="bg-eerie/50 border-2 border-barn/30 rounded p-3 mt-3">
                            <Text variant="caption" color="secondary" className="italic leading-relaxed flex">
                              <Flame className="w-4 h-4 mr-2 text-barn flex-shrink-0" />
                              <span>{exercise.notes}</span>
                            </Text>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Spartan shield-inspired corner decorations */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 border-barn opacity-70" />
            <div className="absolute top-4 right-4 w-8 h-8 border-r-4 border-t-4 border-barn opacity-70" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 border-barn opacity-70" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 border-barn opacity-70" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Completion Message with Spartan theme and "Día Finalizado" button */}
      {allCompleted && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-8 text-center"
        >
          <div className="bg-barn/20 border-4 border-barn rounded-lg p-6">
            <div className="w-16 h-16 rounded-full bg-barn/30 flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-8 h-8 text-barn" />
            </div>
            <Text variant="h4" color="primary" className="mb-2 uppercase tracking-widest">
              ¡VICTORIA GLORIOSA!
            </Text>
            <Text variant="body" color="secondary" className="mb-6">
              Has conquistado todos los ejercicios del día. ¡La gloria de Esparta corre por tus venas!
            </Text>

            {/* Botón "Día Finalizado" */}
            <Button
              variant="primary"
              size="lg"
              onClick={finishDay}
              className="border-4 border-barn group relative overflow-hidden"
            >
              <span className="flex items-center justify-center space-x-2 relative z-10">
                <Shield className="w-5 h-5 mr-2" />
                <span className="uppercase font-bold tracking-wider">DÍA FINALIZADO</span>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-barn via-bean to-barn opacity-0 group-hover:opacity-20"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
            </Button>
          </div>
        </motion.div>
      )}
    </div>
  )
}
