export interface Exercise {
  name: string
  sets: number
  reps: string
  notes?: string
}

export interface DayRoutine {
  day: string
  exercises: Exercise[]
}

export interface Routine {
  clientDocument: string
  clientName: string
  routine: DayRoutine[]
  createdAt: string
}

export interface RoutineSearchResult {
  name: string
  routine: DayRoutine[]
}
