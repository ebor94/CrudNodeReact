import Form from "react-bootstrap/Form";
import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";

function Spaces(props) {
  const [Ismarcado, setismarcado] = useState();

  const handleChange = () => {
    setismarcado((current) => !current);
  };
  const { handleSpace } = props;
  return (
    <div className="col-12 mt-3">
      <Accordion className="rounded-0 ">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="bg-secondary text-white rounded-0 ">
            ¿Cuál es su espacio a remodelar?
          </Accordion.Header>
          <Accordion.Body>
            <Form>
              {["checkbox"].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    value={Ismarcado}
                    onClick={handleSpace}
                    onChange={handleChange}
                    inline
                    label="HABITACIONES"
                    name="HABITACIONES"
                    type={type}
                    id={`inline-${type}-24`}
                  />
                  <Form.Check
                    value={Ismarcado}
                    onClick={handleSpace}
                    onChange={handleChange}
                    inline
                    label="SALONES INT"
                    name="SALONES INT"
                    type={type}
                    id={`inline-${type}-25`}
                  />
                  <Form.Check
                    inline
                    value={Ismarcado}
                    onClick={handleSpace}
                    onChange={handleChange}
                    label="BAÑOS"
                    name="BAÑOS"
                    type={type}
                    id={`inline-${type}-26`}
                  />
                  <Form.Check
                    value={Ismarcado}
                    onClick={handleSpace}
                    onChange={handleChange}
                    inline
                    label="SALA"
                    name="SALA"
                    type={type}
                    id={`inline-${type}-27`}
                  />
                  <Form.Check
                    value={Ismarcado}
                    onClick={handleSpace}
                    onChange={handleChange}
                    inline
                    label="COMEDOR"
                    name="COMEDOR"
                    type={type}
                    id={`inline-${type}-22`}
                  />
                  <Form.Check
                    value={Ismarcado}
                    onClick={handleSpace}
                    onChange={handleChange}
                    inline
                    label="COCINA"
                    name="COCINA"
                    type={type}
                    id={`inline-${type}-23`}
                  />
                  <Form.Check
                    value={Ismarcado}
                    onClick={handleSpace}
                    onChange={handleChange}
                    inline
                    label="PASILLOS"
                    name="PASILLOS"
                    type={type}
                    id={`inline-${type}-5`}
                  />
                  <Form.Check
                    inline
                    value={Ismarcado}
                    onClick={handleSpace}
                    onChange={handleChange}
                    label="ESCALERAS"
                    name="ESCALERAS"
                    type={type}
                    id={`inline-${type}-6`}
                  />
                  <Form.Check
                    inline
                    value={Ismarcado}
                    onClick={handleSpace}
                    onChange={handleChange}
                    label="TERRAZAS CUBIERTAS"
                    name="TERRAZAS CUBIERTAS"
                    type={type}
                    id={`inline-${type}-7`}
                  />
                  <Form.Check
                    value={Ismarcado}
                    onClick={handleSpace}
                    onChange={handleChange}
                    inline
                    label="HABITACIONES DE HOTEL"
                    name="HABITACIONES DE HOTEL"
                    type={type}
                    id={`inline-${type}-8`}
                  />
                  <Form.Check
                    inline
                    value={Ismarcado}
                    onClick={handleSpace}
                    onChange={handleChange}
                    label="HABITACION DE HOSPITALES"
                    name="HABITACION DE HOSPITALES"
                    type={type}
                    id={`inline-${type}-9`}
                  />
                  <Form.Check
                    inline
                    value={Ismarcado}
                    onClick={handleSpace}
                    onChange={handleChange}
                    label="CONSULTORIOS"
                    name="CONSULTORIOS"
                    type={type}
                    id={`inline-${type}-10`}
                  />
                  <Form.Check
                    inline
                    value={Ismarcado}
                    onClick={handleSpace}
                    onChange={handleChange}
                    label="LC HELADERIAS"
                    name="LC HELADERIAS"
                    type={type}
                    id={`inline-${type}-11`}
                  />
                  <Form.Check
                    inline
                    value={Ismarcado}
                    onClick={handleSpace}
                    onChange={handleChange}
                    label="BAÑOS-C.COMERCIAL"
                    name="BAÑOS-C.COMERCIAL"
                    type={type}
                    id={`inline-${type}-12`}
                  />
                  <Form.Check
                    value={Ismarcado}
                    onClick={handleSpace}
                    onChange={handleChange}
                    inline
                    label="LC ROPA"
                    name="LC ROPA"
                    type={type}
                    id={`inline-${type}-13`}
                  />
                  <Form.Check
                    value={Ismarcado}
                    onClick={handleSpace}
                    onChange={handleChange}
                    inline
                    label="SUPERMERCADOS"
                    name="SUPERMERCADOS"
                    type={type}
                    id={`inline-${type}-14`}
                  />
                  <Form.Check
                    inline
                    value={Ismarcado}
                    onClick={handleSpace}
                    onChange={handleChange}
                    label="RESTAURANTES"
                    name="RESTAURANTES"
                    type={type}
                    id={`inline-${type}-15`}
                  />
                  <Form.Check
                    inline
                    value={Ismarcado}
                    onClick={handleSpace}
                    onChange={handleChange}
                    label="BANCOS"
                    name="BANCOS"
                    type={type}
                    id={`inline-${type}-16`}
                  />
                  <Form.Check
                    inline
                    value={Ismarcado}
                    onClick={handleSpace}
                    onChange={handleChange}
                    label="INS EDUCATIVAS"
                    name="INS EDUCATIVAS"
                    type={type}
                    id={`inline-${type}-17`}
                  />
                  <Form.Check
                    inline
                    value={Ismarcado}
                    onClick={handleSpace}
                    onChange={handleChange}
                    label="INS RELIGIOSAS"
                    name="INS RELIGIOSAS"
                    type={type}
                    id={`inline-${type}-18`}
                  />
                  <Form.Check
                    inline
                    value={Ismarcado}
                    onClick={handleSpace}
                    onChange={handleChange}
                    label="INS HOSPITALARIAS"
                    name="INS HOSPITALARIAS"
                    type={type}
                    id={`inline-${type}-19`}
                  />
                  <Form.Check
                    inline
                    value={Ismarcado}
                    onClick={handleSpace}
                    onChange={handleChange}
                    label="PATIOS Y EXTERIORES RESIDENCIALES"
                    name="PATIOS Y EXTERIORES RESIDENCIALES"
                    type={type}
                    id={`inline-${type}-20`}
                  />
                </div>
              ))}
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Spaces;
