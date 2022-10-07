import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Col from "react-bootstrap/Col";

function CheckInlineExample(props) {
  const [Ismarcado, setismarcado] = useState(true);

  const { handlareas } = props;

  const handleChange = () => {
    setismarcado((current) => !current);
  };

  const handleChange2 = () => {
    setismarcado((current) => !current);
  };

  const handleChange3 = () => {
    setismarcado((current) => !current);
  };
  const handleChange4 = (evnt) => {
    setismarcado((current) => !current);
  };

  return (
    <Col md={6} xs={12} className="mt-3">
      <Card>
        <Card.Header className="bg-success text-white">
          ¿Cuál es su espacio a remodelar?{" "}
        </Card.Header>
        <Card.Body>
          <Form>
            {["checkbox"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  value={Ismarcado}
                  onChange={handleChange}
                  onClick={handlareas}
                  label="AREAS RESIDENCIALES"
                  name="AREARESIDENCIAL"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  value={Ismarcado}
                  onChange={handleChange2}
                  onClick={handlareas}
                  label="AREAS COMERCIALES"
                  name="AREACOMERCIAL"
                  type={type}
                  id={`inline-${type}-2`}
                />
                <Form.Check
                  inline
                  label="EXTERIORES"
                  onChange={handleChange3}
                  onClick={handlareas}
                  name="AREAEXTERIOR"
                  type={type}
                  id={`inline-${type}-3`}
                />
                <Form.Check
                  inline
                  label="AREAS INSTITUCIONALES"
                  name="AREAINSTITUCIONAL"
                  onChange={handleChange4}
                  onClick={handlareas}
                  type={type}
                  id={`inline-${type}-4`}
                />
              </div>
            ))}
          </Form>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CheckInlineExample;
