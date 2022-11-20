import { useData } from "@/context"
import { emptyNote, IContext } from "@/models"
import { toSentenceCase, toURL } from "@/utils"
import { motion } from "framer-motion"
import { RiCheckLine, RiCloseLine } from "react-icons/ri"
import { useLocation, useNavigate } from "react-router-dom"

const TxtForm = () => {
  const {
    setProp,
    data: { notes, selectedNote },
  } = useData() as IContext
  const { desc, title, id } = selectedNote
  const { pathname } = useLocation()
  const nav = useNavigate()

  const re = /^[A-Za-z0-9\s]+$/
  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) =>
    (e.target.value === "" || re.test(e.target.value)) &&
    setProp({
      selectedNote: { id, desc, title: e.target.value },
    })

  const handleDesc = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setProp({
      selectedNote: { id, title, desc: e.target.value },
    })

  const handleClose = () => {
    if (id) {
      const selectedNote = notes.find((note) => note.id === id)
      setProp({ selectedNote })
    }
    nav(-1)
  }

  const handleCheck = () => {
    const newTitle = toSentenceCase(title).trim()
    if (id) {
      const updatedList = notes.map((note) =>
        note.id === id ? { ...note, title: newTitle, desc } : note,
      )
      setProp({ notes: updatedList })
      nav(`/${toURL(title)}`, { replace: true })
    } else if (title && desc) {
      setProp({
        notes: [
          ...notes,
          {
            title: newTitle,
            desc,
            id: notes.length + 1,
          },
        ],
        selectedNote: emptyNote,
      })
      nav("/", { replace: true })
    }
  }

  return (
    <>
      <motion.input
        onChange={handleTitle}
        value={title}
        type="text"
        placeholder="Title"
        className="border-b p-2 text-xl rounded-md h-fit w-full font-semibold"
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
        className="p-2 mt-2 mb-2 w-full resize-none min-h-[calc(100%-107px)]"
        placeholder="Description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          duration: 0.4,
          delay: 0.15,
        }}
      />
      <div
        className={`${
          notes.length ? "justify-between" : "justify-end"
        } flex w-full`}
      >
        {!!notes.length && (
          <motion.button
            onClick={handleClose}
            aria-label="secondary action"
            initial={{ opacity: 0, scale: 0.95, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            className="border mr-2 rounded-full p-3 hover:bg-slate-50"
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              duration: 0.4,
              delay: 0.3,
            }}
          >
            <RiCloseLine />
          </motion.button>
        )}

        <motion.button
          onClick={handleCheck}
          aria-label="primary action"
          disabled={pathname === "/form" && !(title && desc)}
          className={`${
            pathname === "/form" &&
            !(title && desc) &&
            "disabled:bg-slate-100 disabled:hover:cursor-default"
          } border ml-2 rounded-full p-3 hover:bg-slate-50 cursor-pointer`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            duration: 0.4,
            delay: 0.3,
          }}
        >
          <RiCheckLine />
        </motion.button>
      </div>
    </>
  )
}

export default TxtForm
