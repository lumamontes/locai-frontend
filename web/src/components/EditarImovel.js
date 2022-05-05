import EditarImovelComponent from "./Custom-components/EditarImovelComponent"
import Footer_v1 from "./global-components/footer"
import Navbar from "./global-components/navbar"
import React from "react"
const EditarImovel = () => {
  return (
    <div>
      <Navbar />
      <EditarImovelComponent/>
      <Footer_v1/>
    </div>
  )
}
export default EditarImovel