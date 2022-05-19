import React from "react";
import './styles.css'
import { PDFViewer } from 'react-view-pdf';
import SignDocument from '../ModalAssinarContrato';

export default function ContratoComponent() {
  return (
    <div >
      <PDFViewer url="https://res.cloudinary.com/dr7alklmf/image/upload/v1652940886/11487-Texto_do_Artigo-45136-44601-10-20201127_a4jvnk.pdf" />
      <SignDocument />
    </div>
  )
}