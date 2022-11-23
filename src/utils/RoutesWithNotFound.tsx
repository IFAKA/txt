import { IChild } from "@/models"
import { motion } from "framer-motion"
import { RiHome2Line } from "react-icons/ri"
import { Route, Routes, useNavigate } from "react-router-dom"

export const RoutesWithNotFound = ({ children }: IChild) => {
  const nav = useNavigate()
  return (
    <Routes>
      {children}
      <Route
        path="*"
        element={
          <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="font-bold text-lg mb-3">
              This route is inexistent
            </div>
            <motion.button
              onClick={() => nav("/", { replace: true })}
              className="dark:bg-slate-800 bg-white shadow-md border ml-2 rounded-full p-3 hover:bg-slate-50 cursor-pointer"
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
              <RiHome2Line />
            </motion.button>
          </div>
        }
      />
    </Routes>
  )
}
