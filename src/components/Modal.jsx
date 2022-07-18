import React, {useState} from "react";
import { Modal } from 'react-bootstrap';
import ModalForm from "./ModalForm";


export default function InfoModal(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button className="main__button" onClick={handleShow}>
        {props.text}
      </button>

      <Modal show={show} onHide={handleClose} centered fade backdropClassName="backdropModal" className="getStarted__rightContent">
        <div className="Page_title">Заголовок</div>
        <div className="Page_subtitle">Подзаголовок</div>
        <ModalForm/>
      </Modal>
    </>
  );
}