import Footer_v1 from "../../global-components/footer";
import Navbar from "../../global-components/navbar";
import React from "react";
import CadastrarImovelForm from "./Cadastrarform";
export default function CadastrarImovel () {
  return (
   <div>
      <Navbar/>
      <CadastrarImovelForm/>
    <Footer_v1/>
   </div>
  )
}