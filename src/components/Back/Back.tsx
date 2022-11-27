import { motion } from "framer-motion"
import { RiArrowLeftSLine } from "react-icons/ri"
import { useNavigate } from "react-router-dom"

const Back = () => {
  const nav = useNavigate()
  const back = () => nav("/", { replace: true })
  return (
    <motion.button
      onClick={back}
      className="absolute left-0 -mt-5 rounded-full ml-1 p-3 hover:bg-slate-50"
      aria-label="secondary action"
      initial={{ opacity: 0, scale: 0.95, x: 20 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.3,
      }}
    >
      <RiArrowLeftSLine />
    </motion.button>
  )
}
export default Back
