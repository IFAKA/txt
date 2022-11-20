import { useData } from "@/context"
import { IContext } from "@/models"
import { motion } from "framer-motion"
import { RiDraftLine, RiPencilLine } from "react-icons/ri"
import { useLocation, useNavigate } from "react-router-dom"

const FloatButton = () => {
  const {
    data: { search, selectedNote },
    setProp,
  } = useData() as IContext
  const { pathname } = useLocation()
  const nav = useNavigate()
  const { title, desc } = selectedNote

  const handleClick = () => {
    pathname !== "/" && pathname !== "/form" && setProp({ selectedNote })
    nav("/form")
  }

  return (
    <>
      {!search && pathname !== "/form" && (
        <div className="fixed bottom-0 w-full flex justify-center">
          <div className="relative max-w-lg w-full">
            <motion.button
              aria-label="primary action"
              onClick={handleClick}
              disabled={pathname === "/form" && !(title && desc)}
              className="absolute bottom-4 right-4 bg-white shadow-md border ml-2 rounded-full p-3 hover:bg-slate-50 cursor-pointer"
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
              {pathname === "/" ? <RiDraftLine /> : <RiPencilLine />}
            </motion.button>
          </div>
        </div>
      )}
    </>
  )
}
export default FloatButton
