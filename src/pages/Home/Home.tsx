import { useData } from "@/context"
import { IContext, Note } from "@/models"
import { toSentenceCase, toURL } from "@/utils"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const {
    data: { notes, search },
    setProp,
  } = useData() as IContext
  const navigate = useNavigate()

  const filteredNotes =
    notes.filter((note) => note.title.includes(search)) ?? notes

  const goToNote = (selectedNote: Note) => {
    setProp({ search: "", selectedNote })
    navigate(`/${toURL(selectedNote.title)}`, { replace: true })
  }

  return (
    <div className="pb-16 mt-4 grid place-items-center min-h-[calc(100%-74px)]">
      <div className="grid gap-4 max-w-xs w-full">
        {filteredNotes?.reverse().map((note, i) => (
          <motion.button
            onClick={() => goToNote(note)}
            key={note.id}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
              duration: 0.2,
              delay: Math.sqrt(i) * 0.3,
            }}
          >
            <motion.div
              className="text-left font-semibold w-full px-4 py-2 border rounded-xl cursor-pointer hover:shadow-sm ease-in-out"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              {toSentenceCase(note.title)}
            </motion.div>
          </motion.button>
        ))}
      </div>
    </div>
  )
}

export default Home
