"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import Text from "@/components/atoms/Text"
import Button from "@/components/atoms/Button"
import Input from "@/components/atoms/Input"
import { ArrowLeft, Plus, Trash2, Edit, Eye } from "lucide-react"
import type { Routine, DayRoutine } from "@/types"

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<"create" | "list">("create")
  const [clientDocument, setClientDocument] = useState("")
  const [clientName, setClientName] = useState("")
  const [routine, setRoutine] = useState<DayRoutine[]>([
    { day: "", exercises: [{ name: "", sets: 0, reps: "", notes: "" }] },
  ])

  // Datos de ejemplo
  const routines: Routine[] = [
    {
      clientDocument: "38803625",
      clientName: "Juan Pérez",
      routine: [],
      createdAt: "2024-01-15",
    },
    {
      clientDocument: "12345678",
      clientName: "María García",
      routine: [],
      createdAt: "2024-01-14",
    },
  ]

  const addDay = () => {
    setRoutine([...routine, { day: "", exercises: [{ name: "", sets: 0, reps: "", notes: "" }] }])
  }

  const removeDay = (dayIndex: number) => {
    setRoutine(routine.filter((_, index) => index !== dayIndex))
  }

  const addExercise = (dayIndex: number) => {
    const newRoutine = [...routine]
    newRoutine[dayIndex].exercises.push({ name: "", sets: 0, reps: "", notes: "" })
    setRoutine(newRoutine)
  }

  const removeExercise = (dayIndex: number, exerciseIndex: number) => {
    const newRoutine = [...routine]
    newRoutine[dayIndex].exercises = newRoutine[dayIndex].exercises.filter((_, index) => index !== exerciseIndex)
    setRoutine(newRoutine)
  }

  const updateDay = (dayIndex: number, field: string, value: string) => {
    const newRoutine = [...routine]
    newRoutine[dayIndex] = { ...newRoutine[dayIndex], [field]: value }
    setRoutine(newRoutine)
  }

  const updateExercise = (dayIndex: number, exerciseIndex: number, field: string, value: string | number) => {
    const newRoutine = [...routine]
    const exercise = newRoutine[dayIndex].exercises[exerciseIndex]

    if (field === "sets") {
      newRoutine[dayIndex].exercises[exerciseIndex] = {
        ...exercise,
        sets: typeof value === "number" ? value : Number.parseInt(value as string) || 0,
      }
    } else {
      newRoutine[dayIndex].exercises[exerciseIndex] = {
        ...exercise,
        [field]: value as string,
      }
    }
    setRoutine(newRoutine)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Rutina creada:", { clientDocument, clientName, routine })
    alert("Rutina creada exitosamente!")
  }

  return (
    <div className="min-h-screen bg-eerie">
      {/* Header */}
      <header className="bg-raisin border-b border-bean py-4">
        <div className="container-wide px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Volver al Sitio
                </Button>
              </Link>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-neutral-900 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 border border-white rounded-full" />
                </div>
                <Text variant="h5" className="font-serif font-medium">
                  GymSparta Admin
                </Text>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container-wide px-6 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Text variant="h2" className="text-center mb-8">
            Panel de Control - Entrenadores
          </Text>

          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-raisin rounded-lg p-1 border border-bean">
              <button
                onClick={() => setActiveTab("create")}
                className={`px-6 py-3 rounded-md transition-all duration-200 ${
                  activeTab === "create" ? "bg-barn text-flash" : "text-flash hover:text-barn"
                }`}
              >
                Crear Rutina
              </button>
              <button
                onClick={() => setActiveTab("list")}
                className={`px-6 py-3 rounded-md transition-all duration-200 ${
                  activeTab === "list" ? "bg-barn text-flash" : "text-flash hover:text-barn"
                }`}
              >
                Ver Rutinas
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === "create" ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-4xl mx-auto"
              >
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Client Info */}
                  <div className="card p-6">
                    <Text variant="h3" className="mb-6">
                      Información del Cliente
                    </Text>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        placeholder="Número de documento"
                        value={clientDocument}
                        onChange={(e) => setClientDocument(e.target.value)}
                        required
                      />
                      <Input
                        placeholder="Nombre completo"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Routine */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <Text variant="h3">Rutina de Entrenamiento</Text>
                      <Button type="button" onClick={addDay} variant="secondary">
                        <Plus className="w-4 h-4 mr-2" />
                        Agregar Día
                      </Button>
                    </div>

                    {routine.map((day, dayIndex) => (
                      <motion.div
                        key={dayIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: dayIndex * 0.1 }}
                        className="card p-6"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <Input
                            placeholder="Nombre del día (ej: Lunes - Pecho y Tríceps)"
                            value={day.day}
                            onChange={(e) => updateDay(dayIndex, "day", e.target.value)}
                            className="flex-1 mr-4"
                            required
                          />
                          {routine.length > 1 && (
                            <Button type="button" onClick={() => removeDay(dayIndex)} variant="secondary" size="sm">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          )}
                        </div>

                        <div className="space-y-4">
                          {day.exercises.map((exercise, exerciseIndex) => (
                            <div key={exerciseIndex} className="grid md:grid-cols-5 gap-4 items-end">
                              <Input
                                placeholder="Ejercicio"
                                value={exercise.name}
                                onChange={(e) => updateExercise(dayIndex, exerciseIndex, "name", e.target.value)}
                                required
                              />
                              <Input
                                type="number"
                                placeholder="Series"
                                value={exercise.sets === 0 ? "" : exercise.sets}
                                onChange={(e) =>
                                  updateExercise(dayIndex, exerciseIndex, "sets", Number.parseInt(e.target.value) || 0)
                                }
                                required
                              />
                              <Input
                                placeholder="Repeticiones"
                                value={exercise.reps}
                                onChange={(e) => updateExercise(dayIndex, exerciseIndex, "reps", e.target.value)}
                                required
                              />
                              <Input
                                placeholder="Notas (opcional)"
                                value={exercise.notes || ""}
                                onChange={(e) => updateExercise(dayIndex, exerciseIndex, "notes", e.target.value)}
                              />
                              <div className="flex gap-2">
                                <Button
                                  type="button"
                                  onClick={() => addExercise(dayIndex)}
                                  variant="secondary"
                                  size="sm"
                                >
                                  <Plus className="w-4 h-4" />
                                </Button>
                                {day.exercises.length > 1 && (
                                  <Button
                                    type="button"
                                    onClick={() => removeExercise(dayIndex, exerciseIndex)}
                                    variant="secondary"
                                    size="sm"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </Button>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="text-center">
                    <Button type="submit" size="lg">
                      Crear Rutina
                    </Button>
                  </div>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="list"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-6xl mx-auto"
              >
                <div className="card overflow-hidden">
                  <div className="p-6 border-b border-neutral-200">
                    <Text variant="h3">Rutinas Creadas</Text>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-neutral-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-neutral-900 font-medium">Cliente</th>
                          <th className="px-6 py-4 text-left text-neutral-900 font-medium">Documento</th>
                          <th className="px-6 py-4 text-left text-neutral-900 font-medium">Fecha</th>
                          <th className="px-6 py-4 text-left text-neutral-900 font-medium">Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {routines.map((routine, index) => (
                          <motion.tr
                            key={routine.clientDocument}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="border-b border-neutral-200 hover:bg-neutral-50 transition-colors duration-200"
                          >
                            <td className="px-6 py-4">
                              <Text variant="body">{routine.clientName}</Text>
                            </td>
                            <td className="px-6 py-4">
                              <Text variant="body" color="secondary">
                                {routine.clientDocument}
                              </Text>
                            </td>
                            <td className="px-6 py-4">
                              <Text variant="caption" color="secondary">
                                {routine.createdAt}
                              </Text>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex space-x-2">
                                <Button variant="ghost" size="sm">
                                  <Eye className="w-4 h-4" />
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <Edit className="w-4 h-4" />
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </div>
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </main>
    </div>
  )
}
