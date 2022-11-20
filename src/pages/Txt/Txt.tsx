import { useData } from "@/context"
import { emptyNote, IContext } from "@/models"
import { toURL } from "@/utils"
import { motion } from "framer-motion"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

const Txt = () => {
  const {
    data: {
      notes,
      selectedNote: { title, desc },
    },
    setProp,
  } = useData() as IContext
  const nav = useNavigate()
  const params = useParams()

  useEffect(() => {
    setProp({
      selectedNote:
        notes.find((note) => toURL(note.title) === params.title) ?? emptyNote,
    })
  }, [params.title])

  return (
    <>
      {title && desc ? (
        <>
          <motion.div
            className="p-2 text-xl rounded-md h-fit w-full font-semibold"
            initial={{ opacity: 0, scale: 0.95, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              duration: 0.5,
            }}
          >
            {title}
          </motion.div>
          <motion.div
            className="block p-2 w-full rounded-md resize-none"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            {desc}
          </motion.div>
        </>
      ) : (
        <></>
        // <div className="w-full h-full flex flex-col justify-center items-center">
        //   <div className="font-bold text-lg">This note is inexistent</div>
        //   <motion.button
        //     className="border rounded-full px-4 py-2 mt-2 hover:bg-slate-50"
        //     onClick={() => nav("/")}
        //   >
        //     Go home
        //   </motion.button>
        // </div>
      )}
    </>
  )
}

export default Txt
