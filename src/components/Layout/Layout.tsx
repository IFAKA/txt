import { IChild } from "@/models"
import { Bar } from "../Bar"
import { Floater } from "../Floater"

const Layout = ({ children }: IChild) => {
  return (
    <div className="w-full flex flex-col items-center h-screen">
      <Bar />
      <div className="max-w-lg w-full h-full p-4">{children}</div>
      <Floater />
    </div>
  )
}
export default Layout
