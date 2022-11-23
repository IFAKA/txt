import { motion } from "framer-motion"

const Header = ({
  children,
  show,
}: {
  children: React.ReactNode
  show?: boolean
}) => {
  return (
    <>
      {show && (
        <motion.div
          className="font-semibold text-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
            duration: 0.2,
            delay: 0.15,
          }}
        >
          {children}
        </motion.div>
      )}
    </>
  )
}
export default Header
