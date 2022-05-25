import { Modal, ModalBody, ModalHeader } from "reactstrap";
import React from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";
export default function UploadFilesModal (props ) {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: 'image/jpeg,image/png',
    maxFiles: 5
  })
    async function handleupload(click) {
      const formData = new FormData()
      formData.append("file", acceptedFiles[0]);
      formData.append("upload_preset", 'upload')
      // formData.append("raw_convert", 'aspose')
     await axios.post('https://api.cloudinary.com/v1_1/dr7alklmf/image/upload', formData).then((response) => {
       console.log(response.data)
     })
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
         <div className="d-flex justify-content-center">
         <button className="ltn__secondary-bg text-white rounded pt-10 pb-10" onClick={handleupload}>Enviar contrato</button>
         </div>
      </ModalBody>
    </Modal>
  )
}