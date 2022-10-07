import Form from "react-bootstrap/Form";
import Formats from "./ListFormat";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Col from "react-bootstrap/Col";

function SwitchFormat() {
  const [onformat, setonformat] = useState(true);

  const handleChange = (event) => {
    setonformat((current) => !current);
  };

  return (
    <div className="row">
      <Col xs={12} md={3} className="mt-3">
        <Card>
          <Card.Header className="bg-warning ">Filtro por tamaño</Card.Header>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3" controlId="Format">
                <Form.Check
                  type="switch"
                  id="Format"
                  label="Formato"
                  className="mx-5"
                  value={onformat}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </Col>
      <Formats Formats={onformat} />
    </div>
  );
}

export default SwitchFormat;
