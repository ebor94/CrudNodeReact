import Form from "react-bootstrap/Form";
import { useState } from "react";
import Sensation from "./listSesantions";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function Switchsesation() {
  const [onsensation, setonsensation] = useState(true);

  const handleChange = (event) => {
    setonsensation((current) => !current);
  };

  return (
    <div className="row">
      <Col xs={12} md={3} className="mt-3">
        <Card>
          <Card.Header className="bg-warning ">
            Sensacion De producto?
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3" controlId="superficie">
                <Form.Check
                  type="switch"
                  id="sensacion"
                  label="sensacion"
                  className="mx-5"
                  value={onsensation}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </Col>
      <Sensation onsensation={onsensation} />
    </div>
  );
}

export default Switchsesation;
