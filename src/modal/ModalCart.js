import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
function ModalCart(props) {
 
  console.log("🚀 ~ file: ModalCart.js:7 ~ ModalCart ~ cart", props.cart);

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
        <Modal.Body>
          {/* {props.cart.COTDETALLE.item.map(({}, index) => {
            return (
              <>
            </>
          )})} */}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.handleClosecart}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCart;
