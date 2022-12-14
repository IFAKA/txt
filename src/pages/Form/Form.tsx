import { useData } from "@/context"
import { IContext } from "@/models"
import { motion } from "framer-motion"

const Form = () => {
  const {
    setProp,
    data: { selectedNote },
  } = useData() as IContext
  const { desc, title, id } = selectedNote

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) =>
    setProp({
      selectedNote: { id, desc, title: e.target.value },
    })

  const handleDesc = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setProp({
      selectedNote: { id, title, desc: e.target.value },
    })

  return (
    <>
      <motion.input
        onChange={handleTitle}
        value={title}
        className="border-b dark:border-none py-3 px-4 mb-0.5 text-lg rounded-t-xl h-fit w-full font-bold dark:bg-slate-800"
        placeholder="Title"
        type="text"
        autoFocus
        initial={{ opacity: 0, scale: 0.95, y: 5 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          duration: 0.4,
        }}
      />
      <motion.textarea
        onChange={handleDesc}
        value={desc}
        className="py-3 px-4 rounded-b-xl w-full resize-none min-h-[calc(100%-112px)] dark:bg-slate-800"
        placeholder="Description"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          duration: 0.4,
          delay: 0.15,
        }}
      />
    </>
  )
}

export default Form
