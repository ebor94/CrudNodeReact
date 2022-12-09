import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function CalculateComplements(props) {
  return (
    <>
      <Modal
        show={props.showcomplement}
        onHide={props.handleCloseComplemets}
        keyboard={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Productos Complementarios</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {props.quantity}          
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.handleCloseComplemets}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CalculateComplements;
