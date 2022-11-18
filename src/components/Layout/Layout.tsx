import { IChild } from "@/models"
import { Input } from "../Input"
import { Nav } from "../Nav"

const Layout = ({ children }: IChild) => {
  return (
    <div className="h-screen">
      <Nav />
      {children}
      <Input />
    </div>
  )
}
export default Layout
