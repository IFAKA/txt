import { useData } from "@/context"
import { emptyNote, IContext } from "@/models"
import { motion } from "framer-motion"
import { RiCheckLine, RiCloseLine } from "react-icons/ri"
import { useLocation } from "react-router-dom"
import { Modal } from "../Modal"
import { Render } from "../Render"

const DeleteModal = () => {
  const {
    data: { notes, selectedNote },
    setProp,
  } = useData() as IContext
  const { pathname } = useLocation()

  const remove = (id: string) => {
    const updatedNotes = notes.filter((note) => note.id !== id)
    setProp({ notes: updatedNotes })
    closeModal()
  }

  const closeModal = () => setProp({ selectedNote: emptyNote })

  const inRoot = pathname === "/"
  const hasTitle = !!selectedNote.title
  const condition = inRoot && hasTitle

  return (
    <Render when={condition}>
      <Modal close={closeModal}>
        <div className="text-xl font-semibold">
          Delete "{selectedNote.title}" ?
        </div>

        <div className="flex justify-between w-full">
          <motion.button
            onClick={closeModal}
            className="p-3 dark:hover:bg-slate-700 hover:bg-slate-50 rounded-full w-fit flex justify-center items-center border"
            type="button"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.98 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
              duration: 0.3,
            }}
          >
            <RiCloseLine />
          </motion.button>
          <motion.button
            onClick={() => remove(selectedNote.id)}
            className="p-3 dark:hover:bg-slate-700 hover:bg-slate-50 rounded-full w-fit flex justify-center items-center border"
            type="button"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.98 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
              duration: 0.3,
              delay: 0.1,
            }}
          >
            <RiCheckLine />
          </motion.button>
        </div>
      </Modal>
    </Render>
  )
}
export default DeleteModal
