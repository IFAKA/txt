import { Data, Note } from "../types"

export const emptyNote: Note = {
  id: "",
  title: "",
  desc: "",
}

export const emptyData: Data = {
  search: "",
  notes: [],
  selectedNote: emptyNote,
}
