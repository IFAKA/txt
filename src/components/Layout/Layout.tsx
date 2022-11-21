import { IChild } from "@/models"
import { useLocation } from "react-router-dom"
import { FloatButton } from "../FloatButton"
import { Modal } from "../Modal"
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
          className={`max-w-2xl w-full p-4 ${
            pathname === "/" && "grid gap-4 mb-10"
          }`}
        >
          {children}
        </div>
      </div>
      <FloatButton />
      <Modal />
    </>
  )
}
export default Layout
