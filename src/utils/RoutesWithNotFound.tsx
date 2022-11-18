import { IChild } from "@/models"
import { Route, Routes } from "react-router-dom"

export const RoutesWithNotFound = ({ children }: IChild) => (
  <Routes>
    {children}
    <Route path="*" element={<div>Not Found</div>} />
  </Routes>
)
