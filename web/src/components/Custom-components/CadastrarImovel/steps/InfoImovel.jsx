import { Input } from "reactstrap"
import React, { useEffect, useState } from "react"
import { useDropzone } from "react-dropzone"
import { useAnuncio } from "../../../../hooks/useAnuncio"
export default function InfoImovel() {
  const { handleChange, valuesForm, handleImage } = useAnuncio()
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/jpeg,image/png',
    maxFiles: 5,
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })))
    },
    onDropAccepted: (acceptedFiles) => handleImage(acceptedFiles)
  })

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);
  return (
    <div>
      <form className="d-flex flex-column gap-1 w-100 align-items-center">
        <div className="d-flex flex-column w-75">
          <label>Quantos quartos o seu imóvel possui?</label>
          <Input value={valuesForm.room_quantity} type="number" name="room_quantity" onChange={handleChange} />
        </div>
        <div className="d-flex flex-column w-75">
          <label>Quantos banheiros o seu imóvel possui?</label>
          <Input value={valuesForm.bathroom_quantity} type="number" name="bathroom_quantity" onChange={handleChange} />
        </div>
        <div className="d-flex flex-column w-75">
          <label>Garagem</label>
          <Input type="number" />
        </div>
        <div  className="d-flex flex-column w-75">
          <label>o Imovél é mobiliado?</label>
          <Input value={valuesForm.garage_quantity} type="number" name="garage_quantity"  onChange={handleChange}/>
        </div>
        <div className="border d-flex justify-content-center pt-5 pb-5 w-75">
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <h4>Solte as imagens ou clique aqui</h4>
          </div>
        </div>
        <div>{files.map(file => (
          <div key={file.name}>
            <div>
              <img className="img-logo mb-1"
                src={file.preview}
              />
            </div>
          </div>
        ))}</div>
      </form>
    </div>
  )
}
