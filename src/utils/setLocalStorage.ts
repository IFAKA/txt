import { Data } from "@/models"

export const setLocalStorage = (data: Data) =>
  localStorage.setItem("data", JSON.stringify(data))
