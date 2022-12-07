import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
function ModalPay(props) {


  //  console.log(cart);
  return (
    <>
          <Modal show={props.showPay}
              onHide={props.handleClosePay} keyboard={true}>
        <Modal.Header closeButton>
          <Modal.Title>RECAUDO</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button onClick={props.handleClosePay}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalPay;
