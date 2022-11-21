import { useData } from "@/context"
import { IContext } from "@/models"
import { motion } from "framer-motion"
import { RiArrowLeftSLine, RiSearchLine } from "react-icons/ri"
import { useLocation, useNavigate } from "react-router-dom"

const Navbar = () => {
  const {
    data: { search, selectedNote },
    setProp,
  } = useData() as IContext
  const { pathname } = useLocation()
  const nav = useNavigate()
  const { id, title, desc } = selectedNote

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setProp({ search: e.target.value })

  const back = () => nav("/", { replace: true })

  return (
    <div className="sticky border-b h-12 top-0 w-full flex justify-center items-center bg-white bg-opacity-70 backdrop-blur dark:bg-slate-800 border-t dark:border-t-slate-700">
      <div className="justify-center flex w-full max-w-xl relative">
        {pathname !== "/" && pathname !== "/form" && title && desc && (
          <motion.button
            onClick={back}
            className="absolute left-0 top-0 -mt-2 rounded-full ml-1 p-3 hover:bg-slate-50"
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
        )}

        {pathname !== "/" && pathname !== "/form" && (
          <div className="font-semibold">{selectedNote.title}</div>
        )}

        {pathname === "/" && (
          <motion.div
            className="mx-4 relative w-full flex justify-around items-center max-w-sm"
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
            <div className="pl-3 absolute inset-y-0 left-0 flex items-center pointer-events-none">
              <RiSearchLine />
            </div>
            <input
              onChange={handleChange}
              className="w-full pl-10 pr-2.5 py-2 standup"
              value={search}
              type="search"
              placeholder="Search"
              required
            />
          </motion.div>
        )}

        {pathname === "/form" && (
          <motion.div
            className="font-semibold"
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
            {id ? "Edit" : "New"}
          </motion.div>
        )}
      </div>
    </div>
  )
}
export default Navbar
