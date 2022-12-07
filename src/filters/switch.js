import Form from "react-bootstrap/Form";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function SwitchExample(props) {
  const [Ismarcado, setismarcado] = useState();
  const [Ismarcado2, setismarcado2] = useState();

  const { handleuso } = props;

  const handleChange = () => {
    setismarcado((current) => !current);
  };
  const handleChange2 = () => {
    setismarcado2((current) => !current);
  };
  // const handleChange2 = (event) => {
  //   if (event.target.checked) {
  //     console.log("✅ Switch2 is checked");
  //   } else {
  //     console.log("⛔️ Switch2 is NOT checked");
  //   }
  //   setismarcado((current) => !current);
  // };

  return (
    <Col xs={12} md={3} className="mt-3">
      <Card className="rounded-0 card">
        <Card.Header className="bg-secondary text-white ">
          ¿Que tipo superficie va a revestir?
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="superficie">
              <Form.Check
                value={Ismarcado}
                onClick={handleuso}
                onChange={handleChange}
                type="checkbox"
                id="custom-switch"
                label="PISOS"
                name="PISOS"
                className="mx-5"
              />
              <Form.Check
                value={Ismarcado2}
                onClick={handleuso}
                onChange={handleChange2}
                type="checkbox"
                id="custom-switch"
                label="PAREDES"
                name="PAREDES"
                className="mx-5"
              />
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default SwitchExample;
