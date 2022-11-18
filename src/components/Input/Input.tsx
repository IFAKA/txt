import { useData } from "@/context"
import { useInput } from "@/hooks"
import { emptyNote, IContext } from "@/models"
import { motion } from "framer-motion"
import { useState } from "react"
import {
  RiCheckLine,
  RiCloseLine,
  RiDraftLine,
  RiQrCodeLine,
  RiQrScan2Line,
  RiSearchLine,
  RiSettingsLine,
} from "react-icons/ri"
import { useLocation, useNavigate } from "react-router-dom"

const Input = () => {
  const {
    data: {
      search,
      notes,
      newNote: { title, desc },
    },
    setProp,
  } = useData() as IContext
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const { value, handleChange } = useInput()

  const [setting, setSetting] = useState(false)
  const handleSetting = () => setSetting(!setting)
  const handleWrite = () => {
    setSetting(false)
    navigate("/write")
  }
  const handleClose = () => {
    setProp({ newNote: emptyNote })
    navigate("/")
  }
  const handleCheck = () => {
    setProp({
      notes: [...notes, { title, desc, id: notes.length }],
      newNote: emptyNote,
    })
    navigate("/")
  }

  return (
    <div className="fixed bottom-0 px-2 py-1.5 w-full flex justify-center bg-white bg-opacity-70 backdrop-blur dark:bg-slate-800 border-t dark:border-t-slate-700">
      <div className="flex justify-between w-full max-w-sm">
        {!search && (
          <motion.button
            onClick={pathname === "/" ? handleSetting : handleClose}
            initial={{ opacity: 0, scale: 0.95, rotate: -180 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            className="border mr-2 rounded-full p-2 hover:bg-slate-50"
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              duration: 0.4,
              delay: 0.3,
            }}
          >
            {pathname === "/" ? <RiSettingsLine /> : <RiCloseLine />}
          </motion.button>
        )}

        {pathname === "/" && (
          <motion.div
            className="max-w-sm relative w-full border rounded-full flex justify-around items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
              duration: 0.2,
              delay: 0.15,
            }}
          >
            {!setting ? (
              <>
                <div className="absolute inset-y-0 left-0 flex items-center pl-2.5 pointer-events-none">
                  <RiSearchLine />
                </div>
                <input
                  className="w-full pl-8 pr-2 py-1.5 h-full rounded-full hover:bg-slate-50"
                  onChange={handleChange}
                  value={value}
                  type="search"
                  placeholder="Search"
                  required
                  // autoFocus
                />
              </>
            ) : (
              <>
                <button className="flex flex-1 justify-center py-2 hover:bg-slate-50 rounded-l-full">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, x: -40 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                      duration: 0.15,
                    }}
                  >
                    <RiQrCodeLine />
                  </motion.div>
                </button>
                <button className="flex flex-1 justify-center py-2 rounded-r-full hover:bg-slate-50">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, x: -40 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                      duration: 0.15,
                      delay: 0.1,
                    }}
                  >
                    <RiQrScan2Line />
                  </motion.div>
                </button>
              </>
            )}
          </motion.div>
        )}

        {!search && (
          <motion.button
            onClick={pathname === "/" ? handleWrite : handleCheck}
            className="border ml-2 rounded-full p-2 hover:bg-slate-50 cursor-pointer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              duration: 0.4,
              delay: 0.3,
            }}
          >
            {pathname === "/" ? <RiDraftLine /> : <RiCheckLine />}
          </motion.button>
        )}
      </div>
    </div>
  )
}
export default Input
