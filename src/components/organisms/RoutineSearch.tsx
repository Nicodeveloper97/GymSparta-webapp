"use client"

import { useState } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Text from "../atoms/Text"
import SearchBar from "../molecules/SearchBar"
import RoutineCard from "../molecules/RoutineCard"
import type { RoutineSearchResult } from "../../types"
import { Database, AlertCircle } from "lucide-react"

const sampleRoutine: Record<string, RoutineSearchResult> = {
  "38803625": {
    name: "Juan Pérez",
    routine: [
      {
        day: "Lunes - Pecho y Tríceps",
        exercises: [
          { name: "Press de banca", sets: 4, reps: "8-10", notes: "Controla el descenso, explosivo en la subida" },
          { name: "Press inclinado con mancuernas", sets: 3, reps: "10-12", notes: "Mantén los codos a 45 grados" },
          { name: "Fondos en paralelas", sets: 3, reps: "12-15", notes: "Si es muy fácil, agrega peso" },
          { name: "Extensiones de tríceps", sets: 3, reps: "12-15", notes: "Mantén los codos fijos" },
        ],
      },
      {
        day: "Martes - Espalda y Bíceps",
        exercises: [
          { name: "Dominadas", sets: 4, reps: "6-8", notes: "Si no puedes, usa banda elástica" },
          { name: "Remo con barra", sets: 4, reps: "8-10", notes: "Aprieta las escápulas al final" },
          { name: "Curl con barra", sets: 3, reps: "10-12", notes: "No uses impulso" },
          { name: "Curl martillo", sets: 3, reps: "12-15", notes: "Alterna los brazos" },
        ],
      },
      {
        day: "Miércoles - Piernas",
        exercises: [
          { name: "Sentadillas", sets: 4, reps: "10-12", notes: "Baja hasta que los muslos estén paralelos" },
          { name: "Peso muerto rumano", sets: 4, reps: "8-10", notes: "Mantén la espalda recta" },
          { name: "Prensa de piernas", sets: 3, reps: "12-15", notes: "Pies al ancho de hombros" },
          { name: "Elevaciones de gemelos", sets: 4, reps: "15-20", notes: "Pausa de 1 segundo arriba" },
        ],
      },
    ],
  },
}

export default function RoutineSearch() {
  const [searchResult, setSearchResult] = useState<RoutineSearchResult | null>(null)
  const [isSearching, setIsSearching] = useState(false)
  const [notFound, setNotFound] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleSearch = (document: string) => {
    setIsSearching(true)
    setNotFound(false)
    setSearchResult(null)

    setTimeout(() => {
      const result = sampleRoutine[document]
      if (result) {
        setSearchResult(result)
      } else {
        setNotFound(true)
      }
      setIsSearching(false)
    }, 1000)
  }

  return (
    <section id="routines" className="section-padding bg-neutral-50" ref={ref}>
      <div className="container-wide px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Text variant="h2" className="mb-6 text-balance">
            Busca Tu Rutina Personalizada
          </Text>
          <div className="divider mb-6" />
          <Text variant="lead" color="secondary" className="max-w-2xl mx-auto text-balance mb-12">
            Ingresa tu número de documento para acceder a tu rutina personalizada creada por nuestros entrenadores
            expertos.
          </Text>

          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="card p-8">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-neutral-100 rounded-2xl flex items-center justify-center">
                  <Database className="w-8 h-8 text-neutral-700" />
                </div>
              </div>
              <Text variant="h4" className="mb-6">
                Acceso a Rutinas
              </Text>
              <SearchBar onSearch={handleSearch} />
            </div>
          </motion.div>
        </motion.div>

        {isSearching && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <div className="inline-block w-8 h-8 border-2 border-neutral-300 border-t-neutral-900 rounded-full animate-spin mb-4" />
            <Text variant="body" color="secondary">
              Buscando tu rutina...
            </Text>
          </motion.div>
        )}

        {searchResult && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <div className="text-center mb-12">
              <div className="card p-6 max-w-md mx-auto">
                <Text variant="h4" className="mb-2">
                  Rutina de {searchResult.name}
                </Text>
                <Text variant="caption" color="secondary">
                  Plan personalizado
                </Text>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResult.routine.map((day, index) => (
                <RoutineCard key={index} day={day.day} exercises={day.exercises} index={index} />
              ))}
            </div>
          </motion.div>
        )}

        {notFound && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <AlertCircle className="w-16 h-16 text-neutral-400 mx-auto mb-6" />
            <Text variant="h4" className="mb-4">
              Rutina No Encontrada
            </Text>
            <Text variant="body" color="secondary">
              No se encontró ninguna rutina para este documento. Contacta con tu entrenador.
            </Text>
          </motion.div>
        )}
      </div>
    </section>
  )
}
