export interface IChild {
  children: React.ReactNode
}

export interface Note {
  id: string
  title: string
  desc: string
}

export type selectedNote = Omit<Note, "id">

export interface Data {
  search: string
  notes: Note[]
  selectedNote: Note
}

export type Partial<T> = {
  [P in keyof T]?: T[P]
}
export interface IContext {
  data: Data
  setProp: (obj: Partial<Data>) => void
  reset: () => void
}
