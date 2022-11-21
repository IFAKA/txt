import { useData } from "@/context"
import { emptyNote, IContext } from "@/models"
import { motion } from "framer-motion"
import { useEffect, useMemo } from "react"
import { RiHome2Line } from "react-icons/ri"
import { useNavigate, useParams } from "react-router-dom"
import SyntaxHighlighter from "react-syntax-highlighter"

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
            className="mx-2 pb-4 pt-3 text-xl w-full font-semibold"
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
            className="mx-2 w-full pb-16 whitespace-pre-wrap"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            {desc}
          </motion.div>
          <motion.div
            className="mx-2 w-full pb-16 whitespace-pre-wrap"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            {/* <SyntaxHighlighter
              language="typescript"
              wrapLongLines={true}
              useInlineStyles={true}
              style={{ vs: { backgroundColor: "white" } }}
            >
              {desc}
            </SyntaxHighlighter> */}
          </motion.div>
        </>
      ) : (
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="font-bold text-lg mb-3">This note is inexistent</div>
          <motion.button
            onClick={() => nav("/", { replace: true })}
            className="bg-white shadow-md border ml-2 rounded-full p-3 hover:bg-slate-50 cursor-pointer"
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
