"use client"

import { useState } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Text from "@/components/atoms/Text"
import SearchBar from "@/components/molecules/SearchBar"
import RoutineViewer from "@/components/molecules/RoutineViewer"
import type { RoutineSearchResult } from "@/types"
import { Database, AlertCircle, User, Shield, Scroll } from "lucide-react"

const sampleRoutine: Record<string, RoutineSearchResult> = {
  "38803625": {
    name: "Juan 'LEÓN' Pérez",
    routine: [
      {
        day: "LUNES - PECHO DE ESPARTANO",
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
        day: "MARTES - ESPALDA DE GUERRERO",
        exercises: [
          { name: "Dominadas de Guerra", sets: 5, reps: "5-8", notes: "Si no puedes, usa banda. Pero HAZLAS." },
          { name: "Remo Bárbaro", sets: 4, reps: "6-8", notes: "Aprieta escápulas como si tu vida dependiera" },
          { name: "Curl Bíceps Demoledor", sets: 4, reps: "8-10", notes: "Sin impulso. Puro músculo, pura fuerza." },
          { name: "Curl Martillo Implacable", sets: 3, reps: "12-15", notes: "Alterna brazos, siente el poder" },
        ],
      },
      {
        day: "MIÉRCOLES - PIERNAS DE HIERRO",
        exercises: [
          { name: "Sentadillas del Infierno", sets: 5, reps: "8-10", notes: "Baja hasta que arda, sube como un titán" },
          {
            name: "Peso Muerto Espartano",
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
        day: "JUEVES - HOMBROS DE BATALLA",
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
        day: "VIERNES - BATALLA TOTAL",
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
      {/* Spartan-inspired background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/images/spartan-helmet.svg')] bg-repeat opacity-3 bg-fixed"></div>
      </div>
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="absolute inset-0 hex-pattern" />

      <div className="container-wide px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <Text variant="h2" color="primary" className="mb-6 flex items-center justify-center">
            <Scroll className="w-8 h-8 mr-3 text-barn" /> PERGAMINO DE
          </Text>
          <Text variant="h2" className="mb-8 text-gradient-primary uppercase font-bold tracking-widest">
            ENTRENAMIENTO
          </Text>
          <div className="w-32 h-1 bg-gradient-to-r from-barn via-bean to-barn mx-auto mb-8" />
          <Text variant="lead" color="secondary" className="max-w-3xl mx-auto leading-relaxed uppercase">
            INGRESA TU CÓDIGO DE IDENTIFICACIÓN PARA ACCEDER A TU RUTINA PERSONALIZADA. CADA GUERRERO TIENE SU PROPIO
            CAMINO HACIA LA GLORIA.
          </Text>
        </motion.div>

        {/* Search Interface with Spartan styling */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-raisin rounded-lg overflow-hidden border-4 border-barn/30 relative">
              <img src="/images/gym-warrior-1.avif" alt="Guerrero GymSparta" className="w-full h-full object-cover" />

              {/* Spartan-inspired overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-raisin/80 via-raisin/30 to-transparent"></div>

              {/* Red accent line - Spartan shield inspired */}
              <div className="absolute top-4 bottom-4 right-0 w-2 bg-barn"></div>

              {/* Spartan emblem */}
              <div className="absolute bottom-8 left-0 right-0 text-center">
                <Shield className="w-16 h-16 text-barn mx-auto mb-4" />
                <Text variant="h4" className="uppercase tracking-widest text-flash">
                  ENTRENAMIENTO ÉLITE
                </Text>
              </div>

              {/* Spartan shield-inspired corner decorations */}
              <div className="absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 border-barn"></div>
              <div className="absolute top-4 right-4 w-12 h-12 border-t-4 border-r-4 border-barn"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 border-b-4 border-l-4 border-barn"></div>
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-barn"></div>
            </div>
          </motion.div>

          <motion.div
            className="mx-auto w-full max-w-xl"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-raisin border-4 border-bean rounded-lg p-8 relative overflow-hidden">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-barn/5 via-transparent to-bean/5" />

              {/* Icon */}
              <motion.div
                className="flex justify-center mb-6"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <div className="w-20 h-20 border-4 border-barn rounded-full flex items-center justify-center relative">
                  <Database className="w-10 h-10 text-barn" />
                  <motion.div
                    className="absolute inset-0 border-2 border-bean rounded-full"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  />
                </div>
              </motion.div>

              <Text variant="h4" color="primary" className="mb-6 text-center uppercase tracking-widest">
                TERMINAL DE ACCESO
              </Text>

              <SearchBar onSearch={handleSearch} placeholder="INGRESA TU CÓDIGO DE GUERRERO" />

              {/* Corner decorations - Spartan shield inspired */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 border-barn opacity-70" />
              <div className="absolute top-4 right-4 w-8 h-8 border-r-4 border-t-4 border-barn opacity-70" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 border-barn opacity-70" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 border-barn opacity-70" />
            </div>
          </motion.div>
        </div>

        {/* Loading State with Spartan theme */}
        {isSearching && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12 mt-12">
            <div className="relative mx-auto w-24 h-24">
              <motion.div
                className="absolute inset-0 rounded-full border-8 border-barn border-t-transparent"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-2 rounded-full border-4 border-bean border-b-transparent"
                animate={{ rotate: -360 }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
              <Shield className="absolute inset-0 m-auto w-8 h-8 text-barn" />
            </div>
            <Text variant="body" color="primary" className="mt-6 uppercase tracking-wider">
              ACCEDIENDO AL PROTOCOLO...
            </Text>
            <Text variant="caption" color="secondary" className="mt-2">
              VERIFICANDO CREDENCIALES DE GUERRERO
            </Text>
          </motion.div>
        )}

        {/* Search Results with Spartan styling */}
        {searchResult && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-16"
          >
            {/* User Info */}
            <div className="text-center mb-12">
              <div className="bg-raisin border-4 border-barn rounded-lg p-6 max-w-2xl mx-auto relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-barn/5 via-transparent to-bean/5" />
                <div className="relative z-10">
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <motion.div
                      className="w-12 h-12 rounded-full border-2 border-barn flex items-center justify-center"
                      animate={{ rotateY: 360 }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <User className="w-6 h-6 text-barn" />
                    </motion.div>
                    <Text variant="h3" color="primary" className="uppercase tracking-widest">
                      GUERRERO IDENTIFICADO
                    </Text>
                  </div>
                  <Text variant="h4" className="mb-2 text-gradient-primary uppercase font-bold">
                    {searchResult.name}
                  </Text>
                  <div className="flex items-center justify-center space-x-2">
                    <Shield className="w-4 h-4 text-barn" />
                    <Text variant="caption" color="accent" className="uppercase tracking-wider">
                      PROTOCOLO DE ENTRENAMIENTO ACTIVO
                    </Text>
                    <Shield className="w-4 h-4 text-barn" />
                  </div>
                </div>

                {/* Corner decorations - Spartan shield inspired */}
                <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-barn opacity-70" />
                <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-barn opacity-70" />
                <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-barn opacity-70" />
                <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-barn opacity-70" />
              </div>
            </div>

            {/* Routine Viewer */}
            <RoutineViewer routine={searchResult.routine} />
          </motion.div>
        )}

        {/* No Results - Spartan styled */}
        {notFound && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12 mt-12">
            <div className="mx-auto w-24 h-24 border-4 border-barn rounded-full flex items-center justify-center">
              <AlertCircle className="w-12 h-12 text-barn" />
            </div>
            <Text variant="h4" color="primary" className="mb-4 mt-6 uppercase tracking-widest">
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
