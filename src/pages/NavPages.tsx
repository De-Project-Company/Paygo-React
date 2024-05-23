import { Routes, Route } from "react-router-dom"
import { Dashboard } from "./Dashboard"
import ClientPage from "./ClientPage"
import AddNew from "./AddNew"

export const NavPages = () => {
  return (
    <Routes>
         <Route path="/" element={<Dashboard />} />
         <Route path = "/client" element={< AddNew/>} />
         <Route path="/client/addClient" element= {<ClientPage />} />
    </Routes>
  )
}
