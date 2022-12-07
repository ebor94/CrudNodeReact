import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Col from "react-bootstrap/Col";

function CheckInlineExample(props) {
  const [Ismarcadoresidencial, setIsmarcadoresidencial] = useState(true);
  const [Ismarcadocomercial, setismarcadocomercial] = useState(true);
  const [Ismarcadoinstitucional, setismarcadoinstitucional] = useState(true);
  const [Ismarcadoexterior, setIsmarcadoexterior] = useState(true);


  const { handleresidencial } = props;
  const { handlecomercial } = props;
  const {handleinstitucional} = props;
  const {handleexterior} = props;

  //console.log(handleexterior)

  const handleChangeinstitucional = (e) => {
    setismarcadoinstitucional((current) => !current);
  };

  const handleChangeresidencial = (e) => {
    setIsmarcadoresidencial((current) => !current);
  };

  const handleChange2 = () => {   
    setismarcadocomercial((current) => !current);
  };


  const handleChangeexterior = (e) => {
    setIsmarcadoexterior((current) => !current);
  };

 

  return (
    <Col md={6} xs={12} className="mt-3">
      <Card>
        <Card.Header className="bg-secondary text-white">
          ¿Cuál es su area a remodelar?{" "}
        </Card.Header>
        <Card.Body>
          <Form>
            {["checkbox"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  value={Ismarcadoresidencial}
                  onChange={handleChangeresidencial}
                  onClick={handleresidencial}
                  label="AREAS RESIDENCIALES"
                  name="AREARESIDENCIAL"
                  type={type}
                  id="AREARESIDENCIAL"
                />
                <Form.Check
                  inline
                  value={Ismarcadocomercial}
                  onChange={handleChange2}
                  onClick={handlecomercial}
                  label="AREAS COMERCIALES"
                  name="AREACOMERCIAL"
                  type={type}
                  id="AREACOMERCIAL"
                />
                <Form.Check
                  inline
                  label="EXTERIORES"
                  value={Ismarcadoexterior}
                  onChange={handleChangeexterior}
                  onClick={handleexterior}
                  name="AREAEXTERIOR"
                  type={type}
                  id="EXTERIORES"
                />
                <Form.Check
                  inline
                  label="AREAS INSTITUCIONALES"
                  name="AREAINSTITUCIONAL"
                  value={Ismarcadoinstitucional}
                  onChange={handleChangeinstitucional}
                  onClick={handleinstitucional}
                  type={type}
                  id="AREAINSTITUCIONAL"
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
