import { AnimatePresence, motion } from "framer-motion"

const Modal = ({
  children,
  renderWhen,
  close,
}: {
  children: React.ReactNode
  renderWhen: boolean
  close?: () => void
}) => {
  return (
    <AnimatePresence>
      {renderWhen && (
        <motion.div
          className="z-10 p-4 fixed inset-0 justify-center items-center flex overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={close}
        >
          <motion.div
            className="grid gap-4 place-items-center select-none rounded-xl max-w-xs relative dark:bg-slate-800 bg-white p-5"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
              duration: 0.3,
              delay: 0.1,
            }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
export default Modal
