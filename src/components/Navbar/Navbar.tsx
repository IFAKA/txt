import { useData } from "@/context"
import { IContext } from "@/models"
import { useLocation } from "react-router-dom"
import { Back } from "../Back"
import { Header } from "../Header"
import { Render } from "../Render"
import { SearchBar } from "../SearchBar"

const Navbar = () => {
  const {
    data: { selectedNote },
  } = useData() as IContext
  const { pathname } = useLocation()
  const { id, title, desc } = selectedNote

  const inRoot = pathname === "/"
  const inForm = pathname === "/form"
  const inTxt = pathname !== "/" && pathname !== "/form" && !!(title && desc)
  const headerText = id ? "Edit" : "New"

  const conditions = {
    SearchBar: inRoot,
    Header: inForm,
    Back: inTxt,
  }

  return (
    <div className="sticky border-b h-12 top-0 w-full flex justify-center items-center bg-white bg-opacity-70 backdrop-blur dark:bg-slate-800 border-t dark:border-t-slate-700">
      <div className="justify-center flex w-full max-w-3xl relative">
        <Render when={conditions}>
          <SearchBar />
          <Header>{headerText}</Header>
          <Back />
        </Render>
      </div>
    </div>
  )
}
export default Navbar
