import Form from "react-bootstrap/Form";
import Tipologias from "./listTipologias";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Col from "react-bootstrap/Col";

function Tipologia() {
  const [Ismarcado, setismarcado] = useState(true);

  const handleChange = (event) => {
    setismarcado((current) => !current);
  };

  return (
    <div className="row">
      <Col xs={12} md={3} className="mt-3">
        <Card className="rounded-0 card">
          <Card.Header className="bg-secondary ">
            ¿Tipologia De producto?
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3" controlId="superficie">
                <Form.Check
                  value={Ismarcado}
                  onChange={handleChange}
                  type="switch"
                  id="tipologia"
                  label="tipologia"
                  className="mx-5"
                />
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </Col>
      <Tipologias Ismarcado={Ismarcado} />
    </div>
  );
}

export default Tipologia;
