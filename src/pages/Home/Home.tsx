import { useData } from "@/context"
import { useLongPress } from "@/hooks"
import { emptyNote, IContext, Note } from "@/models"
import { motion } from "framer-motion"
import { useEffect, useMemo } from "react"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const {
    data: { notes, search },
    setProp,
  } = useData() as IContext
  const nav = useNavigate()
  const filteredNotes = useMemo(
    () =>
      notes
        .filter(({ title }) =>
          title.toLowerCase().includes(search.toLowerCase()),
        )
        .reverse() ?? notes,
    [notes.length, search],
  )

  const goToNote = (id: string) => {
    setProp({ search: "" })
    nav(`/note/${id}`)
  }

  useEffect(() => {
    setProp({ selectedNote: emptyNote, search: "" })
  }, [])

  const openModal = (clickedNote: Note) =>
    setProp({ selectedNote: clickedNote })

  const { onClick, onMouseDown, onTouchStart, onMouseUp, onTouchEnd } =
    useLongPress({ onClick: goToNote, onLongPress: openModal })

  return (
    <>
      {filteredNotes?.map((note, i) => (
        <motion.button
          onClick={() => onClick(note.id)}
          onMouseDown={() => onMouseDown(note)}
          onTouchStart={() => onTouchStart(note)}
          onMouseUp={onMouseUp}
          onTouchEnd={onTouchEnd}
          className="w-full select-none rounded-xl"
          key={note.id}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
            duration: 0.2,
            delay: Math.sqrt(i + 1) * 0.3,
          }}
        >
          <motion.div
            className="text-left rounded-xl font-semibold w-full px-4 py-3 border cursor-pointer dark:hover:bg-slate-700 hover:bg-slate-50"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            {note.title}
          </motion.div>
        </motion.button>
      ))}
    </>
  )
}

export default Home
