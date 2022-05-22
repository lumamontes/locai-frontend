import { Modal, ModalBody, ModalHeader } from "reactstrap";
import React from "react";
export default function UploadFilesModal (props ) {
  return (
    <Modal toggle={props.click} isOpen={props.open}>
      <ModalHeader clas toggle={props.click} isOpen={props.open}></ModalHeader>
      <ModalBody>
        <h1>Fazer o upload do contrato</h1>
      </ModalBody>
    </Modal>
  )
}