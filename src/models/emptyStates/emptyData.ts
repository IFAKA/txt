import { Data, newNote } from "../types"

export const emptyNote: newNote = {
  title: "",
  desc: "",
}

export const emptyData: Data = {
  search: "",
  notes: [],
  newNote: emptyNote,
}
