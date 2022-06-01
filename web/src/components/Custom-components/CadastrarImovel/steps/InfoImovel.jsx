import { Input } from "reactstrap"
import React, { useEffect, useState } from "react"
import { useDropzone } from "react-dropzone"
import { useAnuncio } from "../../../../hooks/useAnuncio"
import { RadioGroup } from "@headlessui/react"
export default function InfoImovel() {
  const { handleChange, valuesForm, handleImage, handleWithFurnite, with_furnitureState} = useAnuncio()
  const [files, setFiles] = useState([]);
  const [currentDoc, setCurrent] = useState('')
  const with_furniture = [
    {id:1, name:"Sim", value:true},
    {id:2, name:"Não", value:false}
  ]
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/jpeg,image/png',
    maxFiles: 5,
    onDrop: acceptedFiles => {
      const filesArray = acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      }))
      setFiles([...filesArray, ...files])
      handleImage([...filesArray, ...files])
    }
    // onDropAccepted: (acceptedFiles) => 
  })

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, []);
console.log(files)
  return (
    <div>
      <form className="d-flex flex-column gap-1 w-100 align-items-center">
        <div className="d-flex flex-column w-75">
          <label>Quantos quartos o seu imóvel possui?</label>
          <Input value={valuesForm.room_quantity} min="0" type="number" name="room_quantity" onChange={handleChange} />
        </div>
        <div className="d-flex flex-column w-75">
          <label>Quantos banheiros o seu imóvel possui?</label>
          <Input value={valuesForm.bathroom_quantity} min="0" type="number" name="bathroom_quantity" onChange={handleChange} />
        </div>
        <div className="d-flex flex-column w-75">
          <label>Garagem (Capacidade de carros)</label>
          <Input value={valuesForm.garage_quantity} min="0" name="garage_quantity"  onChange={handleChange} type="number" />
        </div>
        <div className="mb-4">
        <label>O imóvel é mobilado?</label>
        <RadioGroup
          className="d-flex justify-content-center gap-4  mt-1"
          value={currentDoc}
          onChange={setCurrent}
        >
          {with_furniture.map((item) => {
            return (
                    <RadioGroup.Option  className={({ active }) => `${active ? "radio-button-active" : "radio-button-disabled" } radio-button border rounded cursor-pointer focus:outline-none `}
                      key={item.name}
                      value={item}
                      onClick={() => handleWithFurnite(item.value)}
                    >
                <div  className="cursor-pointer w-100">
                  <div className="justify-content-center d-flex gap-1 flex-column align-items-center">
                      <label className="text-center">{item.name}</label>
                  </div>
                </div>
                    </RadioGroup.Option>
            )
          })}
        </RadioGroup>
        </div>
        <div className="border d-flex justify-content-center pt-5 pb-5 w-75">
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <h4>Solte as imagens ou clique aqui</h4>
          </div>
        </div>
        <div className="d-flex w-100 gap-1">{files.map(file => (
          <div key={file.name}>
            <div >
              <img className="img-preview mb-1" src={file.preview}/>
            </div>
          </div>
        ))}</div>
      </form>
    </div>
  )
}
