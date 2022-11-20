import { IChild } from "@/models"
import { FloatButton } from "../FloatButton"
import { Navbar } from "../Navbar"

const Layout = ({ children }: IChild) => {
  return (
    <div className="w-full flex flex-col items-center h-screen">
      <Navbar />
      <div className="max-w-lg w-full h-full p-4">{children}</div>
      <FloatButton />
    </div>
  )
}
export default Layout
