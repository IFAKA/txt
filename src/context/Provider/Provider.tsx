import { Data, emptyData, IChild, IContext } from "@/models"
import { cleanLocalStorage, setLocalStorage } from "@/utils"
import { createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Context = createContext<IContext | null>(null)

export const useData = () => useContext(Context)

const initialState = () =>
  localStorage.getItem("data")
    ? JSON.parse(localStorage.getItem("data") as string)
    : emptyData

export const Provider = ({ children }: IChild) => {
  const [data, setData] = useState<Data>(initialState)
  const nav = useNavigate()

  const setProp = (obj: Partial<Data>) =>
    setData((prev) => {
      setLocalStorage({ ...prev, ...obj })
      return { ...prev, ...obj }
    })

  const reset = () => {
    cleanLocalStorage()
    setData(emptyData)
  }

  useEffect(() => {
    !data.notes.length && nav("/form", { replace: true })
  }, [])

  return (
    <Context.Provider
      value={{
        data,
        setProp,
        reset,
      }}
    >
      {children}
    </Context.Provider>
  )
}
