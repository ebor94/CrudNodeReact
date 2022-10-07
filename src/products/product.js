import { useEffect, useState } from "react";
import CheckInlineExample from "../filters/check";
import Usos from "../filters/switch";
import Accesosintext from "../filters/accesos.js";
import Space from "../filters/space";
import Tipologia from "../filters/listTipologias";
import GetSensationss from "../filters/listSesantions";
import GetFormats from "../filters/ListFormat";
import ProductList from "./listProduct";
import {  InfoProd  } from "../data/products";


//InfoProd().then(val => console.log(val)) 

function Getproducts() {

  const [SUPERFICIE, SETSUPERFICIE] = useState([]);
  const [productListAreas, setproductListAreas] = useState([]);
  const [productListacceso, setproductListacceso] = useState([]);
  const [productListSpace, setproductListSpace] = useState([]);
  const [TIPOLOGIA, SETTIPOLOGIA] = useState([]);
  const [sensacion, setsensacion] = useState([]);
  const [TAMANO, SETTAMANO] = useState([]);


  const [userList, setUserList] = useState([]);

  useEffect(() => {
    InfoProd()
      .then(userList => setUserList(userList))
      .catch(error => {
        // handle any error state, rejected promises, etc..
      });
  }, []);


  const filteredProduct = userList.filter(
    (product) => SUPERFICIE.length === 0 || SUPERFICIE.includes(product.SUPERFICIE)
  )
    .filter(
      (product) =>
        productListAreas.length === 0 ||
        productListAreas.includes(product.productListAreas)
    )
    .filter(
      (product) =>
        productListacceso.length === 0 ||
        productListacceso.includes(product.productListacceso)
    )
    .filter(
      (product) =>
        productListSpace.length === 0 ||
        productListSpace.includes(product.productListSpace)
    )
    .filter(
      (product) =>
      TIPOLOGIA.length === 0 || TIPOLOGIA.includes(product.TIPOLOGIA)
    )
    .filter(
      (product) =>
        sensacion.length === 0 || sensacion.includes(product.sensacion)
    )
    .filter(
      (product) => TAMANO.length === 0 || TAMANO.includes(product.TAMANO)
    );

  //console.log(productListuso);

  const handleuso = (e) => {
    SUPERFICIE.includes(e.target.name);
    SETSUPERFICIE(
      SUPERFICIE.includes(e.target.name)
        ? SUPERFICIE.filter((product) => product !== e.target.name)
        : [...SUPERFICIE, e.target.name]
    );
  };
  const handlareas = (e) => {
    setproductListAreas(
      productListAreas.includes(e.target.name)
        ? productListAreas.filter((product) => product !== e.target.name)
        : [...productListAreas, e.target.name]
    );
  };
  const handleacceso = (e) => {
    setproductListacceso(
      productListacceso.includes(e.target.name)
        ? productListacceso.filter((product) => product !== e.target.name)
        : [...productListacceso, e.target.name]
    );
  };

  const handleSpace = (e) => {
    setproductListSpace(
      productListSpace.includes(e.target.name)
        ? productListSpace.filter((product) => product !== e.target.name)
        : [...productListSpace, e.target.name]
    );
  };

  const handletipologia = (e) => {
    SETTIPOLOGIA(
      TIPOLOGIA.includes(e.target.name)
        ? TIPOLOGIA.filter((product) => product !== e.target.name)
        : [...TIPOLOGIA, e.target.name]
    );
  };

  const handleSensation = (e) => {
    setsensacion(
      sensacion.includes(e.target.name)
        ? sensacion.filter((product) => product !== e.target.name)
        : [...sensacion, e.target.name]
    );
  };
  const handleFormat = (e) => {
    SETTAMANO(
      TAMANO.includes(e.target.name)
        ? TAMANO.filter((product) => product !== e.target.name)
        : [...TAMANO, e.target.name]
    );
  };

  return (
    <div className="container">
      <div className="row">
      
        <Usos handleuso={handleuso} />
        <CheckInlineExample handlareas={handlareas} />
        <Accesosintext handleacceso={handleacceso} />
      </div>
      <div className="row">
        <Space handleSpace={handleSpace} />
      </div>
      <div className="row">
        <Tipologia handletipologia={handletipologia} />
        <GetSensationss handleSensation={handleSensation} />
      </div>
      <div className="row">
        <GetFormats handleFormat={handleFormat} />
      </div>

      <div className="row">
        <ProductList filteredProduct={filteredProduct} />
      </div>
    </div>
  );
}

export default Getproducts;
