import { IChild } from "@/models"
import { useLocation } from "react-router-dom"
import { FloatButton } from "../FloatButton"
import { DeleteModal } from "../DeleteModal"
import { Navbar } from "../Navbar"

const Layout = ({ children }: IChild) => {
  const { pathname } = useLocation()
  return (
    <>
      <Navbar />
      <div
        className={`${
          pathname === "/" ? "grid place-items-center" : "flex justify-center"
        } w-full h-[calc(100vh-48px)] overflow-auto`}
      >
        <div
          className={`max-w-3xl w-full p-4 ${
            pathname === "/" && "grid gap-4 mb-10"
          }`}
        >
          {children}
        </div>
      </div>
      <FloatButton />
      <DeleteModal />
    </>
  )
}
export default Layout
