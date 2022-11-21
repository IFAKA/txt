import { useData } from "@/context"
import { emptyNote, IContext } from "@/models"
import { motion } from "framer-motion"
import { RiCheckLine, RiCloseLine } from "react-icons/ri"
import { useLocation } from "react-router-dom"

const Modal = () => {
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

  return (
    <>
      {pathname === "/" && !!selectedNote.title && (
        <div
          className="z-10 p-4 fixed inset-0 justify-center items-center flex overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
          onClick={closeModal}
        >
          <motion.div
            className="select-none rounded-xl max-w-xs relative bg-white p-5 grid gap-4 place-items-center"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
              duration: 0.3,
            }}
          >
            <div className="text-xl font-semibold">
              Delete "{selectedNote.title}" ?
            </div>

            <div className="flex justify-between w-full">
              <motion.button
                onClick={closeModal}
                className="p-3 rounded-full w-fit flex justify-center items-center border hover:bg-slate-50"
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
                className="p-3 rounded-full w-fit flex justify-center items-center border hover:bg-slate-50"
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
                <RiCheckLine />
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}
export default Modal
