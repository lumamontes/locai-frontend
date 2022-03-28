import { Input } from "reactstrap"
import React from "react"
import { useDropzone } from "react-dropzone"
export default function InfoImovel() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone()
  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ))
  return (
    <div>
      <form className="d-flex flex-column gap-1 w-100 align-items-center">
        <div className="d-flex flex-column w-75">
          <label>Quantos quartos o seu imóvel possui?</label>
          <Input />
        </div>
        <div className="d-flex flex-column w-75">
          <label>Quantos banheiros o seu imóvel possui?</label>
          <Input />
        </div>
        <div className="d-flex flex-column w-75">
          <label>Garagem</label>
          <Input />
        </div>
        <div className="d-flex flex-column w-75">
          <label>o Imovél é mobiliado?</label>
          <Input />
        </div>
        <div className="border d-flex justify-content-center pt-5 pb-5 w-75">
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <h4>Solte as imagens ou clique aqui</h4>
          </div>
          <div>{files}</div>
        </div>
      </form>
    </div>
  )
}
