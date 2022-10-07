import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { useState } from "react";

function Accesosintext(props) {
  const [Ismarcado, Setismarcado] = useState(true);

  const { handleacceso } = props;

  const handleChange = () => {
    Setismarcado((current) => !current);
  };
  const handleChange2 = () => {
    Setismarcado((current) => !current);
  };

  return (
    <Col xs={12} md={3} className="mt-3">
      <Card>
        <Card.Header className="bg-info text-white">
          ¿Cuál es su espacio a remodelar?{" "}
        </Card.Header>
        <Card.Body>
          <Form>
            {["checkbox"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="SIN ACCESO AL EXTERIOR"
                  name="SINACCEXTE"
                  type={type}
                  id="SINACCEXTE"
                  value={Ismarcado}
                  onChange={handleChange}
                  onClick={handleacceso}
                />
                <Form.Check
                  label="CON ACCESO AL EXTERIOR"
                  name="CONACCEXTE"
                  type={type}
                  id="CONACCEXTE"
                  onChange={handleChange2}
                  onClick={handleacceso}
                />
              </div>
            ))}
          </Form>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Accesosintext;
