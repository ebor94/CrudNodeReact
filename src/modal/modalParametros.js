import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { FiShoppingCart, FiHome, FiMenu } from "react-icons/fi";

function ModalParametros() {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
   
    const handleClose = () => {       
        setShow(false);
    }
    
const handleChange = (e) => {
   localStorage.store =  e.target.value
  setShow(false);
   window.location.reload(false);
}
  useEffect(() => {
   
    if (typeof localStorage.store === "undefined" ||  localStorage.store === ""  ) {
      handleShow();
    }
      }, []);

  return (
    <>
      <a
        className="btn btn-outline-info rounded-0 btn-lg mt-2"
        href="https://www.ceramicaitalia.com/carritosap/sala/pedido.php"
      >
        <FiShoppingCart />
      </a>
      <button
        className="btn btn-outline-primary rounded-0 btn-lg mt-2"
        onClick={handleShow}
      >
        <FiHome />
        {localStorage.store}
      </button>
      <a
        className="btn btn-outline-secondary rounded-0 btn-lg mt-2"
        href="https://www.ceramicaitalia.com/carritosap/sala/menu.php"
      >
        <FiMenu />
      </a>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Parametros de venta </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Seleciones Sala de ventas</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={handleChange}
              >
                <option>Seleccione</option>
                <option value="1401">Cúcuta</option>
                <option value="1402">Bucarmanga</option>
                <option value="1416">Bogotá</option>
                <option value="1411">pereira</option>
                <option value="1414">Cali</option>
                <option value="1413">Medellin</option>
                <option value="1419">Barranquilla</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalParametros;
