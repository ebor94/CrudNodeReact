import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { getDepartament } from "../../data/location";

function Departament() {
  const [departaments, SetDepartments] = useState([]);

  useEffect(() => {
    getDepartament().then((departaments) => SetDepartments(departaments));
  });
  return (
    <Form.Group className="mb-3" controlId="departamento">
      <Form.Label>departamento</Form.Label>
      <Form.Select id="departamento">
        {departaments.map(({ BLAND, BEZEI }, index) => {
          return <option value={BLAND}>{BEZEI}</option>;
        })}
      </Form.Select>
    </Form.Group>
  );
}

export default Departament;
