import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Figure from "react-bootstrap/Figure";
import { getPrice } from "../data/products";
import  LoadingButton  from "./AddDetail"
 import Container from "react-bootstrap/Container";
 import Row from "react-bootstrap/Row";
 import Col from "react-bootstrap/Col";

function Addtocart(props) {
    const [show, setShow] = useState(false);
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(1);

  const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
         getPrice(props.MATERIAL).then((price) => {
           setPrice(price);
          
         });
       
    }); 
    
   

  return (
    <>
      <Button variant="danger  rounded-0" onClick={handleShow}>
        Agregar Producto
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">{props.DESCRIPCION}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col md={{ offset: 3 }}>
                <Figure>
                  <Figure.Image
                    width={171}
                    height={250}
                    alt={props.DESCRIPCION}
                    src={`https://www.ceramicaitalia.com/temporada/${props.MATERIAL}.jpg`}
                  />
                </Figure>
              </Col>
            </Row>
          </Container>

          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Precio</Form.Label>
              <Form.Control type="text" disabled value={`$${price}`} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Disponible</Form.Label>
              <Form.Control type="text" disabled value={props.CANTIDAD} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Ingrese Cantidad</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <LoadingButton
            quantity={quantity}
            price={price}
            code={props.MATERIAL}
            name={props.DESCRIPCION}
            handleClose={handleClose}
            />
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Addtocart;