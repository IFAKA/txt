import { useData } from "@/context"
import { IContext } from "@/models"
import { useState } from "react"

const useInput = () => {
  const {
    data: { search },
    setProp,
  } = useData() as IContext
  const [value, setValue] = useState(search ?? "")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProp({ search: e.target.value.toLowerCase() })
    setValue(e.target.value)
  }

  return { value, handleChange }
}
export default useInput
