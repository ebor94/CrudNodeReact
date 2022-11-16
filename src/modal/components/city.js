import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { getCity } from "../../data/location";

function GetCitys() {
  const [citys, Setcitys] = useState([]);

  useEffect(() => {
    getCity("54").then((citys) => Setcitys(citys));
  }, []);
  return (
    <>
      <Form.Group className="mb-3" controlId="departamento">
        <Form.Label>Ciudad</Form.Label>
        <Form.Select id="departamento">
          {citys.map(({ CITY_CODE, CITY_NAME }) => {
            return <option value={CITY_CODE}>{CITY_NAME}</option>;
          })}
        </Form.Select>
      </Form.Group>
    </>
  );
}

export default GetCitys;
