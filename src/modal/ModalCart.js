import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";
function ModalCart(props) {
  console.log("🚀 ~ file: ModalCart.js:4 ~ ModalCart ~ props", props);
  const [cart, Setcart] = useState(props.cart);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  //  console.log(cart);
  return (
    <>
      <Modal show={props.showCart} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Detalle De su Pedido</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
      </Modal>
    </>
  );
}

export default ModalCart;
