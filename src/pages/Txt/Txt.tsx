import { MDContainer } from "@/components"
import { useData } from "@/context"
import { emptyNote, IContext } from "@/models"
import { motion } from "framer-motion"
import { useEffect, useMemo } from "react"
import { RiHome2Line } from "react-icons/ri"
import { useNavigate, useParams } from "react-router-dom"

const Txt = () => {
  const {
    data: { notes },
    setProp,
  } = useData() as IContext
  const params = useParams()
  const nav = useNavigate()

  const { title, desc, id } = useMemo(
    () => notes.find((note) => note.id === params.id) ?? emptyNote,
    [params.id],
  )

  useEffect(() => {
    setProp({ selectedNote: { desc, id, title } })
  }, [params.id])

  return (
    <>
      {title && desc ? (
        <>
          <motion.div
            className="px-2 font-bold sm:text-4xl text-3xl sm:mt-5 mt-2.5"
            initial={{ opacity: 0, scale: 0.95, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
              duration: 0.2,
            }}
          >
            {title}
          </motion.div>
          <motion.div
            className="px-2 w-full sm:text-lg tracking-wide pb-20 whitespace-pre-wrap sm:mt-10 mt-5"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <MDContainer>{desc}</MDContainer>
          </motion.div>
        </>
      ) : (
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="font-bold text-lg mb-3">This note is inexistent</div>
          <motion.button
            onClick={() => nav("/", { replace: true })}
            className="dark:bg-slate-800 bg-white shadow-md border ml-2 rounded-full p-3 hover:bg-slate-50 cursor-pointer"
            initial={{ opacity: 0, scale: 0.95 }}
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
            <RiHome2Line />
          </motion.button>
        </div>
      )}
    </>
  )
}

export default Txt
