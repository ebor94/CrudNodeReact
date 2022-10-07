import { Formats } from "../datafiltros/format";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Col from "react-bootstrap/Col";

function GetFormats(props) {
  // State with list of all checked item
  const [checked, setChecked] = useState(false);

  const { handleFormat } = props;

  const handleCheck = (event) => {
    setChecked((current) => event.target.checked);
  };

  return (
    <Col xs={12} md={12} className="mt-3">
      <Card>
        <Card.Header className="bg-success text-white">
          Filtro por formato{" "}
        </Card.Header>
        <Card.Body>
          <Form>
            <div className="mb-3">
              {Formats.map((item, index) => {
                return (
                  <Form.Check
                    key={index}
                    inline
                    label={item}
                    name={item}
                    value={checked}
                    onChange={handleCheck}
                    onClick={handleFormat}
                  />
                );
              })}
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default GetFormats;
