import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { useState } from "react";

function Accesosintext(props) {
  const [Ismarcadosinaccesoext, SetIsmarcadosinaccesoext] = useState(true);
  const [Ismarcadoconaccesoext, SetIsmarcadoconaccesoext] = useState(true);

  const { handleconacceso } = props;
  const { handlesinacceso } = props;

  const handleChangeconaccesoext = () => {
    SetIsmarcadoconaccesoext((current) => !current);
  };
  const handleChangesinaccesoext = () => {
    SetIsmarcadosinaccesoext((current) => !current);
  };

  return (
    <Col xs={12} md={3} className="mt-3">
      <Card>
        <Card.Header className="bg-secondary text-white">
          ¿Tipo de acceso?
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
                  value={Ismarcadosinaccesoext}
                  onChange={handleChangesinaccesoext}
                  onClick={handlesinacceso}
                />
                <Form.Check
                  label="CON ACCESO AL EXTERIOR"
                  name="CONACCEXTE"
                  type={type}
                  id="CONACCEXTE"
                  value={Ismarcadoconaccesoext}
                  onChange={handleChangeconaccesoext}
                  onClick={handleconacceso}
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
