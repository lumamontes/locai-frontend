import { Modal, ModalBody, ModalHeader } from "reactstrap";
import React, { useCallback, useState } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import { toast } from "react-toastify";
import { api } from "../../../services/api";
export default function UploadFilesModal(props) {
  const [myFiles, setMyFiles] = useState([])
  const onDrop = useCallback(acceptedFiles => {
    setMyFiles([...myFiles, ...acceptedFiles])
  }, [myFiles])
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    maxFiles: 1,
    onDrop
  })
  async function handleupload(click) {
    toast.loading("Enviando contrato", {
      toastId:"contrato"
    })
    try {
      const formData = new FormData()
      formData.append("file", acceptedFiles[0]);
      formData.append("upload_preset", 'upload')
      // formData.append("raw_convert", 'aspose')
      const link_contrato = await axios.post('https://api.cloudinary.com/v1_1/dr7alklmf/image/upload', formData).then((response) => {
        const { secure_url } = response.data
        return secure_url
      })
     await api.patch(`/bookings/${props.id}`, {
        contract_url:link_contrato.split("https://")[1]
      })
      toast.dismiss("contrato")
      toast.success("Contrato enviado com sucesso !")
      click()
    } catch (error) {
      console.log(error)
      toast.error("OPS! parece que ocorreu um erro com o envio do contrato")
    }
  }
  return (
    <Modal toggle={props.click} isOpen={props.open}>
      <ModalHeader clas toggle={props.click} isOpen={props.open}></ModalHeader>
      <ModalBody>
        <h4 className="text-center"> Fazer o upload do contrato</h4>
        <div className="border d-flex justify-content-center pt-5 pb-5 mb-2">
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <h6>Solte a contrato ou clique aqui</h6>
          </div>
        </div>
        <ul className="list-group mt-2">
              {myFiles.map((file) => (
                <li className="list-group-item mb-2 d-flex align-items-center" key={file.path}>
                 {file.path}
                </li>
              ))}
            </ul>
        <div className="d-flex justify-content-center">
          <button className="ltn__secondary-bg text-white rounded pt-10 pb-10" onClick={() => handleupload(props.click)}>Enviar contrato</button>
        </div>
      </ModalBody>
    </Modal>
  )
}