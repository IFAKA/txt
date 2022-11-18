import { useData } from "@/context"
import { IContext } from "@/models"
import { toSentenceCase, toURL } from "@/utils"
import { motion } from "framer-motion"
import { useMemo } from "react"

const Home = () => {
  const {
    data: { notes, search },
    setProp,
  } = useData() as IContext

  const filteredNotes = useMemo(() => {
    return notes.filter((note) => note.title.includes(search)) ?? notes
  }, [search])

  const clean = () => setProp({ search: "" })

  return (
    <div className="pb-16 mt-4 grid place-items-center min-h-[calc(100%-74px)]">
      <div className="grid gap-4 max-w-xs w-full">
        {filteredNotes?.map((note, i) => (
          <motion.a
            onClick={clean}
            href={`${toURL(note.title)}`}
            key={note.id}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
              duration: 0.2,
              delay: i * 0.15,
            }}
          >
            <motion.div
              className="font-semibold w-full px-4 py-2 border rounded-xl cursor-pointer hover:shadow-sm ease-in-out"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              {toSentenceCase(note.title)}
            </motion.div>
          </motion.a>
        ))}
      </div>
    </div>
  )
}

export default Home
