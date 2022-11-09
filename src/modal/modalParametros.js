import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { FiShoppingCart, FiHome, FiUser, FiDollarSign } from "react-icons/fi";

function ModalParametros() {
  const [show, setShow] = useState(false);
  const [showClient, setShowClient] = useState(false);
  const handleShow = () => setShow(true);
  const handleShowClient = () => setShowClient(true);
  
   const handleChangeClient = () => setShowClient(true);
   
   const handleCloseClient = () => {
     setShowClient(false);
   };
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
      <button
        className="btn btn-outline-primary rounded-0 btn-lg mt-2"
        onClick={handleShowClient}
      >
        <FiUser />
      </button>
      <a
        className="btn btn-outline-info rounded-0 btn-lg mt-2"
        href="https://www.ceramicaitalia.com/carritosap/sala/pedido.php"
      >
        <FiDollarSign />
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
      <Modal
        show={showClient}
        onHide={handleCloseClient}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Parametros de venta </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalParametros;
