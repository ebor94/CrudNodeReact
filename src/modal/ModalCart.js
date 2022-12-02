import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";
function ModalCart(props) {
  const [show, setShow] = useState(props.show);
   const [cart, Setcart] = useState(props.cart);

  const handleShow = () => show;

  const handleClose = () => {
      setShow(false);
    };
  return (
    <>
      <Modal
        show={handleShow}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> Detalle De su Pedido</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cart}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalCart;
