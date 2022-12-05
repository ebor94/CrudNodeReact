import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
function ModalCart(props) {
  console.log("🚀 ~ file: ModalCart.js:4 ~ ModalCart ~ props", props);
  const [cart, Setcart] = useState(props.cart);


  const handleClose = () => {
     console.log("🚀 ~ file: ModalCart.js:11 ~ handleClose ~ showCart",  props.showCart );
    props.showCart = false;
    console.log("🚀 ~ file: ModalCart.js:11 ~ handleClose ~ showCart",  props.showCart );
  };
  //  console.log(cart);
  return (
    <>
      <Modal
        show={props.showCart}
        onHide={props.handleClose}
        backdrop="true"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> Detalle De su Pedido</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCart;
