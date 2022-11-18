import { useData } from "@/context"
import { IContext } from "@/models"
import { motion } from "framer-motion"

const Write = () => {
  const {
    setProp,
    data: {
      newNote: { desc, title },
    },
  } = useData() as IContext

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) =>
    setProp({ newNote: { desc, title: e.target.value } })

  const handleDesc = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setProp({ newNote: { title, desc: e.target.value } })

  return (
    <form className="p-2 flex justify-center min-h-[calc(100%-84px)]">
      <div className="max-w-lg w-full">
        <motion.input
          onChange={handleTitle}
          value={title}
          type="text"
          placeholder="Title"
          className="border-b p-2 rounded-md h-fit w-full mb-2"
          autoFocus
          initial={{ opacity: 0, scale: 0.95, y: 5 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
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
          className="block p-2 w-full rounded-md resize-none min-h-[calc(100%-52px)]"
          placeholder="Deescription"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            duration: 0.4,
            delay: 0.15,
          }}
        />
      </div>
    </form>
  )
}

export default Write
