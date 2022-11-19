import { useData } from "@/context"
import { IContext } from "@/models"
import { toSentenceCase } from "@/utils"
import { motion } from "framer-motion"

const Txt = () => {
  const {
    data: {
      selectedNote: { title, desc },
    },
  } = useData() as IContext
  return (
    <form className="p-2 flex justify-center min-h-[calc(100%-84px)]">
      <div className="max-w-lg w-full">
        {title && desc && (
          <>
            <motion.div
              className="p-2 rounded-md h-fit w-full mb-2 font-semibold"
              initial={{ opacity: 0, scale: 0.95, y: 5 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                duration: 0.4,
              }}
            >
              {toSentenceCase(title)}
            </motion.div>
            <motion.div
              className="block p-2 w-full rounded-md resize-none min-h-[calc(100%-52px)]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                duration: 0.4,
                delay: 0.15,
              }}
            >
              {desc}
            </motion.div>
          </>
        )}
      </div>
    </form>
  )
}

export default Txt
