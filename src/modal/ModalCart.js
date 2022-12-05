import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
function ModalCart(props) {
  const [cart, Setcart] = useState(props.cart);
  console.log("🚀 ~ file: ModalCart.js:7 ~ ModalCart ~ cart", cart);

  //  console.log(cart);
  return (
    <>
      <Modal
        show={props.showCart}
        onHide={props.handleClosecart}
        keyboard={true}
      >
        <Modal.Header closeButton>
          <Modal.Title> Detalle De su Pedido</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button onClick={props.handleClosecart}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCart;
