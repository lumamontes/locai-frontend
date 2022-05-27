import React from "react";
import { PDFViewer } from 'react-view-pdf';
import SignDocument from '../ModalAssinarContrato';
import { useLocation } from "react-router-dom";

export default function ContratoComponent() {
  const params = useLocation()
  const contract_url = params.pathname.split("/contrato/")[1]
  const id_booking = params.pathname.split("pdf").pop()
  return (
    <div >
      <PDFViewer url={`https://${contract_url.split("pdf")[0]}pdf`} />
      <SignDocument id={id_booking.split("/").pop()} />
    </div>
  )
}