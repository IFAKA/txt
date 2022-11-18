import { motion } from "framer-motion"
const Nav = () => (
  <div className="sticky top-0 w-full flex justify-center text-center border-b dark:border-b-slate-700 bg-white bg-opacity-70 backdrop-blur dark:bg-slate-800">
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      className={"font-bold px-8 sm:py-2 py-1.5 me"}
    >
      TXT
    </motion.div>
  </div>
)

export default Nav
