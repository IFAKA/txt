import { useData } from "@/context"
import { emptyNote, IContext } from "@/models"
import { toSentenceCase } from "@/utils"
import { motion } from "framer-motion"
import {
  RiAddLine,
  RiCheckLine,
  RiDraftLine,
  RiPencilLine,
} from "react-icons/ri"
import { useLocation, useNavigate } from "react-router-dom"
import uuid from "react-uuid"
import { Render } from "../Render"

const FloatButton = () => {
  const {
    setProp,
    data: { notes, selectedNote, search },
  } = useData() as IContext
  const { desc, title, id } = selectedNote
  const { pathname } = useLocation()
  const nav = useNavigate()

  const handleClick = () => (pathname === "/form" ? save() : nav("/form"))

  const save = () => {
    const newTitle = toSentenceCase(title).trim()
    const newDesc = toSentenceCase(desc).trim()
    if (id) {
      const updatedList = notes.map((note) =>
        note.id === id ? { ...note, title: newTitle, desc: newDesc } : note,
      )
      setProp({ notes: updatedList })
      nav(-1)
    } else if (title && desc) {
      setProp({
        notes: [
          ...notes,
          {
            title: newTitle,
            desc: newDesc,
            id: uuid(),
          },
        ],
        selectedNote: emptyNote,
      })
      !notes.length ? nav("/", { replace: true }) : nav(-1)
    }
  }

  const inRoot = pathname === "/"
  const inForm = pathname === "/form"
  const inTxt = !inRoot && !inForm

  const conditions = [inRoot, inForm, inTxt]

  return (
    <>
      {!(pathname !== "/" && pathname !== "/form" && !(title && desc)) &&
        !search && (
          <div className="fixed bottom-0 w-full flex justify-center">
            <div className="max-w-3xl w-full relative">
              <motion.button
                onClick={handleClick}
                disabled={pathname === "/form" && !(title && desc)}
                className="absolute bottom-0 right-0 mr-4 mb-4 rounded-full p-4 dark:disabled:bg-slate-900 cursor-pointer shadow-md disabled:bg-slate-50 disabled:cursor-default disabled:shadow-none border dark:border-none bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700"
                aria-label="Float Button"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                  duration: 0.3,
                }}
              >
                <Render when={conditions}>
                  <RiAddLine />
                  <RiCheckLine />
                  <RiPencilLine />
                </Render>
              </motion.button>
            </div>
          </div>
        )}
    </>
  )
}
export default FloatButton
