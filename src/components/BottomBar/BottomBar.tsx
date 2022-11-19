import { useData } from "@/context"
import { useInput } from "@/hooks"
import { emptyNote, IContext } from "@/models"
import { toURL } from "@/utils"
import { motion } from "framer-motion"
import { useState } from "react"
import {
  RiArrowLeftSLine,
  RiCheckLine,
  RiCloseLine,
  RiDraftLine,
  RiPencilLine,
  RiQrCodeLine,
  RiQrScan2Line,
  RiSearchLine,
  RiSettingsLine,
} from "react-icons/ri"
import { useLocation, useNavigate } from "react-router-dom"

const BottomBar = () => {
  const {
    data: { search, notes, selectedNote },
    setProp,
  } = useData() as IContext
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { value, handleChange } = useInput()
  const { title, desc, id } = selectedNote

  const [setting, setSetting] = useState(false)
  const handleSetting = () => setSetting(!setting)

  const handleWrite = () => {
    setSetting(false)
    navigate("/form", { replace: true })
  }

  const handleClose = () => {
    setProp({ selectedNote: emptyNote })
    navigate("/", { replace: true })
  }

  const handleBack = () => {
    if (pathname === `/${toURL(title)}`) {
      navigate("/", { replace: true })
    } else if (pathname === "/form") {
      const selectedNote = notes.find((note) => note.id === id)
      setProp({ selectedNote })
      navigate(`/${toURL(`${selectedNote?.title}`)}`, { replace: true })
    }
  }

  const handleCheck = () => {
    if (id) {
      const updatedList = notes.map((note) =>
        note.id === id ? { ...note, title: title.toLowerCase(), desc } : note,
      )
      setProp({ notes: updatedList })
      navigate(`/${toURL(title)}`, { replace: true })
    } else if (title && desc) {
      setProp({
        notes: [
          ...notes,
          { title: title.toLowerCase(), desc: desc, id: notes.length + 1 },
        ],
        selectedNote: emptyNote,
      })
      navigate("/", { replace: true })
    }
  }

  const handleEdit = () => {
    setProp({ selectedNote })
    navigate("/form", { replace: true })
  }

  return (
    <div className="fixed bottom-0 px-2 py-1.5 w-full flex justify-center bg-white bg-opacity-70 backdrop-blur dark:bg-slate-800 border-t dark:border-t-slate-700">
      <div
        className={`flex ${
          !notes.length ? "justify-end" : "justify-between"
        } w-full max-w-sm`}
      >
        {!!notes.length && !search && (
          <motion.button
            onClick={
              pathname === "/" ? handleSetting : id ? handleBack : handleClose
            }
            aria-label="secondary action"
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
            {pathname === "/" ? (
              <RiSettingsLine />
            ) : id ? (
              <RiArrowLeftSLine />
            ) : (
              <RiCloseLine />
            )}
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
            aria-label="primary action"
            onClick={
              pathname === "/"
                ? handleWrite
                : pathname !== "/form"
                ? handleEdit
                : handleCheck
            }
            disabled={pathname === "/form" && !(title && desc)}
            className={`${
              pathname === "/form" &&
              !(title && desc) &&
              "disabled:bg-slate-100 disabled:hover:cursor-default"
            } border ml-2 rounded-full p-2 hover:bg-slate-50 cursor-pointer`}
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
            {pathname === "/" ? (
              <RiDraftLine />
            ) : pathname === "/form" ? (
              <RiCheckLine />
            ) : (
              <RiPencilLine />
            )}
          </motion.button>
        )}
      </div>
    </div>
  )
}
export default BottomBar
