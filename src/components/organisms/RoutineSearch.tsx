"use client"

import { useState } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Text from "@/components/atoms/Text"
import SearchBar from "@/components/molecules/SearchBar"
import RoutineViewer from "@/components/molecules/RoutineViewer"
import type { RoutineSearchResult } from "@/types"
import { Database, AlertCircle, User } from "lucide-react"

const sampleRoutine: Record<string, RoutineSearchResult> = {
  "38803625": {
    name: "Juan 'Titan' Pérez",
    routine: [
      {
        day: "Día 1 - Destrucción Pectoral",
        exercises: [
          {
            name: "Press de Banca Explosivo",
            sets: 4,
            reps: "6-8",
            notes: "Controla la bestia, explota hacia arriba como un misil",
          },
          {
            name: "Press Inclinado Devastador",
            sets: 4,
            reps: "8-10",
            notes: "45 grados exactos, destruye cada fibra",
          },
          { name: "Fondos Asesinos", sets: 3, reps: "12-15", notes: "Si es fácil, carga peso. Sin piedad." },
          {
            name: "Extensiones Tríceps Letales",
            sets: 4,
            reps: "10-12",
            notes: "Codos fijos como acero, quema hasta el final",
          },
        ],
      },
      {
        day: "Día 2 - Aniquilación Dorsal",
        exercises: [
          { name: "Dominadas de Guerra", sets: 5, reps: "5-8", notes: "Si no puedes, usa banda. Pero HAZLAS." },
          { name: "Remo Bárbaro", sets: 4, reps: "6-8", notes: "Aprieta escápulas como si tu vida dependiera" },
          { name: "Curl Bíceps Demoledor", sets: 4, reps: "8-10", notes: "Sin impulso. Puro músculo, pura fuerza." },
          { name: "Curl Martillo Implacable", sets: 3, reps: "12-15", notes: "Alterna brazos, siente el poder" },
        ],
      },
      {
        day: "Día 3 - Masacre de Piernas",
        exercises: [
          { name: "Sentadillas del Infierno", sets: 5, reps: "8-10", notes: "Baja hasta que arda, sube como un titán" },
          {
            name: "Peso Muerto Rumano Brutal",
            sets: 4,
            reps: "6-8",
            notes: "Espalda recta, caderas hacia atrás, PODER PURO",
          },
          {
            name: "Prensa Devastadora",
            sets: 4,
            reps: "12-15",
            notes: "Pies al ancho de hombros, presiona como un monstruo",
          },
          { name: "Gemelos de Acero", sets: 5, reps: "15-20", notes: "Pausa arriba, contrae como cables de acero" },
        ],
      },
      {
        day: "Día 4 - Hombros de Guerra",
        exercises: [
          { name: "Press Militar Letal", sets: 4, reps: "6-8", notes: "Core activado, presiona hacia la gloria" },
          {
            name: "Elevaciones Laterales Asesinas",
            sets: 4,
            reps: "10-12",
            notes: "Control total en bajada, sin balanceo",
          },
          {
            name: "Elevaciones Posteriores Brutales",
            sets: 4,
            reps: "12-15",
            notes: "Aprieta escápulas, define cada fibra",
          },
          { name: "Plancha del Guerrero", sets: 4, reps: "45-60 seg", notes: "Cuerpo recto como una barra de acero" },
        ],
      },
      {
        day: "Día 5 - Protocolo Total",
        exercises: [
          { name: "Burpees del Apocalipsis", sets: 4, reps: "8-12", notes: "Ritmo constante, sin parar, sin excusas" },
          { name: "Thrusters Explosivos", sets: 4, reps: "10-12", notes: "Movimiento fluido, de cuclillas al cielo" },
          { name: "Mountain Climbers Letales", sets: 4, reps: "20-30", notes: "Caderas bajas, velocidad máxima" },
          { name: "Flexiones de Combate", sets: 4, reps: "10-15", notes: "Si es fácil, pies elevados. SIEMPRE MÁS." },
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
    }, 1500)
  }

  return (
    <section id="routines" className="section-padding bg-eerie relative overflow-hidden" ref={ref}>
      {/* Background effects */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="absolute inset-0 hex-pattern" />

      <div className="container-wide px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <Text variant="h2" color="primary" className="mb-6">
            ACCESO AL
          </Text>
          <Text variant="h2" className="mb-8 text-gradient-primary">
            PROTOCOLO
          </Text>
          <div className="w-32 h-1 bg-gradient-to-r from-barn via-bean to-barn mx-auto mb-8" />
          <Text variant="lead" color="secondary" className="max-w-3xl mx-auto leading-relaxed">
            INGRESA TU CÓDIGO DE IDENTIFICACIÓN PARA ACCEDER A TU RUTINA PERSONALIZADA. CADA GUERRERO TIENE SU PROPIO
            CAMINO HACIA LA GLORIA.
          </Text>
        </motion.div>

        {/* Search Interface */}
        <motion.div
          className="max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="bg-raisin border border-bean rounded-lg p-8 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-barn/5 via-transparent to-bean/5" />

            {/* Icon */}
            <motion.div
              className="flex justify-center mb-6"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <div className="w-16 h-16 border-2 border-barn rounded-full flex items-center justify-center relative">
                <Database className="w-8 h-8 text-barn" />
                <motion.div
                  className="absolute inset-0 border border-bean rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
              </div>
            </motion.div>

            <Text variant="h4" color="primary" className="mb-6 text-center">
              TERMINAL DE ACCESO
            </Text>

            <SearchBar onSearch={handleSearch} placeholder="INGRESA TU CÓDIGO DE GUERRERO" />

            {/* Corner decorations */}
            <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-barn opacity-50" />
            <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-barn opacity-50" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-barn opacity-50" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-barn opacity-50" />
          </div>
        </motion.div>

        {/* Loading State */}
        {isSearching && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <motion.div
              className="inline-block w-16 h-16 border-4 border-barn border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
            <Text variant="body" color="primary" className="mt-6 uppercase tracking-wider">
              ACCEDIENDO AL PROTOCOLO...
            </Text>
            <Text variant="caption" color="secondary" className="mt-2">
              VERIFICANDO CREDENCIALES DE GUERRERO
            </Text>
          </motion.div>
        )}

        {/* Search Results */}
        {searchResult && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-16"
          >
            {/* User Info */}
            <div className="text-center mb-12">
              <div className="bg-raisin border border-barn rounded-lg p-6 max-w-2xl mx-auto relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-barn/5 via-transparent to-bean/5" />
                <div className="relative z-10">
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <User className="w-8 h-8 text-barn" />
                    <Text variant="h3" color="primary">
                      GUERRERO IDENTIFICADO
                    </Text>
                  </div>
                  <Text variant="h4" className="mb-2 text-gradient-primary">
                    {searchResult.name}
                  </Text>
                  <Text variant="caption" color="accent" className="uppercase tracking-wider">
                    PROTOCOLO DE ENTRENAMIENTO ACTIVO
                  </Text>
                </div>
              </div>
            </div>

            {/* Routine Viewer */}
            <RoutineViewer routine={searchResult.routine} />
          </motion.div>
        )}

        {/* No Results */}
        {notFound && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <AlertCircle className="w-16 h-16 text-barn mx-auto mb-6" />
            <Text variant="h4" color="primary" className="mb-4">
              ACCESO DENEGADO
            </Text>
            <Text variant="body" color="secondary">
              CÓDIGO NO RECONOCIDO. CONTACTA CON TU COMANDANTE PARA OBTENER ACCESO.
            </Text>
          </motion.div>
        )}
      </div>
    </section>
  )
}
