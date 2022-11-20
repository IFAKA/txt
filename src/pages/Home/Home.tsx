import { useData } from "@/context"
import { IContext } from "@/models"
import { toURL } from "@/utils"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const {
    data: { notes, search },
  } = useData() as IContext
  const nav = useNavigate()

  const filteredNotes =
    notes.filter(({ title }) =>
      title.toLowerCase().includes(search.toLowerCase()),
    ) ?? notes

  const goTo = (title: string) => nav(`/${toURL(title)}`)

  // min-h-[calc(100%-74px)]
  return (
    <div className="grid gap-4 pb-4">
      {filteredNotes?.reverse().map(({ title, id }, i) => (
        <motion.button
          onClick={() => goTo(title)}
          key={id}
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
            className="text-left font-semibold w-full px-4 py-3 border cursor-pointer hover:shadow-sm ease-in-out"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            {title}
          </motion.div>
        </motion.button>
      ))}
    </div>
  )
}

export default Home
