import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { FiShoppingCart, FiHome, FiUser, FiDollarSign } from "react-icons/fi";
import { Button } from "react-bootstrap";
import Departament from "./components/Departament";
import ModalCart from "./ModalCart";
import ModalCustomer from "./ModalCustomer";
import ModalPay from "./ModalPayment";
import { Getdetails } from "../data/products";
import { getDepartament } from "../data/location";

function ModalParametros() {
  const [show, setShow] = useState(false);
  const [showCart, setshowCart] = useState(false);
  const [showPay, setshowPay] = useState(false);
  const [showClient, setShowClient] = useState(false);
  const [cart, Setcart] = useState([]);
  const [departaments, SetDepartments] = useState([]);

  const handleShow = () => {
    setShow(true);
  };
  const handleShowpay = () => {
    setshowPay(true);
  };
  const handleClosePay = () => {
    setshowPay(false);
  };
  const handleShowcart = () => {
    if (cart.length === 0) {
      Getdetails().then((cart) => Setcart(cart));
    }
    setshowCart(true);
  };
  const handleClosecart = () => {
    setshowCart(false);
  };
  const handleShowClient = () => setShowClient(true);
  const handleChangeClient = () => setShowClient(true);

  const handleCloseClient = () => {
    setShowClient(false);
  };
  const handleClose = () => {
    setShow(false);
  };

  const handleChange = (e) => {
    localStorage.store = e.target.value;
    setShow(false);
    window.location.reload(false);
  };

  useEffect(() => {
    Getdetails().then((cart) => Setcart(cart));
    getDepartament().then((departaments) => SetDepartments(departaments));
    if (
      typeof localStorage.store === "undefined" ||
      localStorage.store === ""
    ) {
      handleShow();
    }
  }, []);

  return (
    <>
      <button
        className="btn btn-outline-light rounded-0 btn-lg mt-2"
        onClick={handleShowcart}
      >
        <FiShoppingCart />
      </button>
      <button
        className="btn btn-outline-light rounded-0 btn-lg mt-2"
        onClick={handleShow}
      >
        <FiHome />
        {localStorage.store}
      </button>
      <button
        className="btn btn-outline-light rounded-0 btn-lg mt-2"
        onClick={handleShowClient}
      >
        <FiUser />
      </button>
      <button
        className="btn btn-outline-light rounded-0 btn-lg mt-2"
        onClick={handleShowpay}
      >
        <FiDollarSign />
      </button>

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
      </Modal>

      <ModalCart
        showCart={showCart}
        cart={cart}
        handleClosecart={handleClosecart}
      />
      <ModalCustomer
        showClient={showClient}
        handleCloseClient={handleCloseClient}
      />
      <ModalPay showPay={showPay} handleClosePay={handleClosePay} />
    </>
  );
}

export default ModalParametros;
