import { IChild } from "@/models"
import { BottomBar } from "../BottomBar"
import { Nav } from "../Nav"

const Layout = ({ children }: IChild) => {
  return (
    <div className="h-screen">
      <Nav />
      {children}
      <BottomBar />
    </div>
  )
}
export default Layout
