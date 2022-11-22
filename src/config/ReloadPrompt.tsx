import { motion, AnimatePresence } from "framer-motion"
import "./ReloadPrompt.css"

import { useEffect } from "react"
import { useRegisterSW } from "virtual:pwa-register/react"
import { RiCheckboxCircleLine } from "react-icons/ri"

function ReloadPrompt() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      console.log("SW Registered: " + r)
    },
    onRegisterError(error) {
      console.log("SW registration error", error)
    },
  })

  const close = () => {
    setOfflineReady(false)
    setNeedRefresh(false)
  }

  useEffect(() => {
    const timer = setTimeout(() => close(), 3000)
    return () => clearTimeout(timer)
  }, [offlineReady])

  return (
    <>
      {(offlineReady || needRefresh) && (
        <div
          className="z-10 p-4 fixed inset-0 justify-center items-center flex overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
        >
          <AnimatePresence>
            <motion.div
              className="select-none rounded-xl max-w-xs relative dark:bg-slate-800 bg-white p-5 grid gap-4 place-items-center"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
                duration: 0.3,
              }}
            >
              {offlineReady ? (
                <>
                  <RiCheckboxCircleLine size={20} />
                  <span className="ml-2">Available offline</span>
                </>
              ) : (
                <span>
                  New content available, click on reload button to update.
                </span>
              )}
              {needRefresh && (
                <button
                  className="border px-3 py-2 rounded-xl"
                  onClick={() => updateServiceWorker(true)}
                >
                  Reload
                </button>
              )}
            </motion.div>{" "}
          </AnimatePresence>
        </div>
      )}
    </>
  )
}

export default ReloadPrompt
