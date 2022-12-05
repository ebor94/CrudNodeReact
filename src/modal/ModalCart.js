import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";
function ModalCart(props) {
 console.log("🚀 ~ file: ModalCart.js:4 ~ ModalCart ~ props", props)
  const [cart, Setcart] = useState(props.cart);

 


  //  console.log(cart);
  return (
    <>
      <Modal
        show={props.handleShowcart}
        onHide={props.handleClosecart}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> Detalle De su Pedido</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
      </Modal>
    </>
  );
}

export default ModalCart;
