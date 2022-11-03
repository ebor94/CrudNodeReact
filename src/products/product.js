import { useEffect, useState } from "react";
import CheckInlineExample from "../filters/check";
import Usos from "../filters/switch";
import Accesosintext from "../filters/accesos.js";
import Space from "../filters/space";
import Tipologia from "../filters/listTipologias";
import GetSensationss from "../filters/listSesantions";
import GetFormats from "../filters/ListFormat";
import ProductList from "./listProduct";
import { InfoProd } from "../data/products";
import { Consecutive } from "../data/consecutive";

function Getproducts() {
  const [SUPERFICIE, SETSUPERFICIE] = useState([]);
  const [productListSpace, setproductListSpace] = useState([]);
  const [TIPOLOGIA, SETTIPOLOGIA] = useState([]);
  const [SENSACION] = useState([]);
  const [TAMANO, SETTAMANO] = useState([]);
  const [AREACOMERCIAL, SETAREACOMERCIAL] = useState([]);
  const [AREARESIDENCIAL, SETAREARESIDENCIAL] = useState([]);
  const [AREAINSTITUCIONAL, SETAREAINSTITUCIONAL] = useState([]);
  const [AREAEXTERIOR, SETAREAEXTERIOR] = useState([]);
  const [CONACCEXTE, SETCONACCEXTE] = useState([]);
  const [SINACCEXTE, SETSINACCEXTE] = useState([]);
  const [userList, setUserList] = useState([]);
  const [userList2, setUserList2] = useState([]);
  const [Consec, setConsec] = useState('');
  

  useEffect(() => {
    if (
      typeof localStorage.store !== "undefined" ||
      localStorage.store !== ""
    ) {
      InfoProd().then((userList) => setUserList(userList));
      InfoProd().then((userList2) => setUserList2(userList2));
      Consecutive().then((Consec) => setConsec(Consec));
    
    }
  }, []);

  const filteredProduct = userList
    .filter(
      (product) =>
        SUPERFICIE.length === 0 || SUPERFICIE.includes(product.SUPERFICIE)
    )
    .filter(
      (product) =>
        AREARESIDENCIAL.length === 0 ||
        AREARESIDENCIAL.includes(product.AREARESIDENCIAL)
    )
    .filter(
      (product) =>
        TIPOLOGIA.length === 0 || TIPOLOGIA.includes(product.TIPOLOGIA)
    )
    .filter(
      (product) =>
        SENSACION.length === 0 || SENSACION.includes(product.SENSACION)
    )
    .filter(
      (product) => TAMANO.length === 0 || TAMANO.includes(product.TAMANO)
    )
    .filter(
      (product) =>
        AREACOMERCIAL.length === 0 ||
        AREACOMERCIAL.includes(product.AREACOMERCIAL)
    )
    .filter(
      (product) =>
        AREAINSTITUCIONAL.length === 0 ||
        AREAINSTITUCIONAL.includes(product.AREAINSTITUCIONAL)
    )
    .filter(
      (product) =>
        AREAEXTERIOR.length === 0 || AREAEXTERIOR.includes(product.EXTERIOR)
    )
    .filter(
      (product) =>
        CONACCEXTE.length === 0 || CONACCEXTE.includes(product.CONACCEXTE)
    )
    .filter(
      (product) =>
        SINACCEXTE.length === 0 || SINACCEXTE.includes(product.SINACCEXTE)
    );

  const handleuso = (e) => {
   
    if (e.target.checked){
      SETSUPERFICIE(
        SUPERFICIE.includes(e.target.name)
          ? SUPERFICIE.filter((product) => product === e.target.name)
          : [...SUPERFICIE, e.target.name]
      );
       
    }else{
        SETSUPERFICIE(
          SUPERFICIE.includes(e.target.name)
            ? SUPERFICIE.filter((product) => product !== e.target.name)
            : [...SUPERFICIE, e.target.name]
        );
    }

  };

  const handleresidencial = (e) => {
    //console.log("residencial")
    SETAREARESIDENCIAL(
      AREARESIDENCIAL.includes(e.target.value)
        ? AREARESIDENCIAL.filter((product) => product !== e.target.value)
        : [...AREARESIDENCIAL, e.target.value]
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
    if (e.target.checked) {
      console.log(TIPOLOGIA.includes(e.target.name));
      console.log(TIPOLOGIA.filter((product) => product !== e.target.name));
      console.log([...TIPOLOGIA, e.target.name]);
    }
    SETTIPOLOGIA(
      TIPOLOGIA.includes(e.target.name)
        ? TIPOLOGIA.filter((product) => product !== e.target.name)
        : [...TIPOLOGIA, e.target.name]
    );
  };

  const handleSensation = (e) => {  
    if (e.target.checked) {       
        setUserList(
          userList.filter((product) =>product.SENSACION.find((product) => product === e.target.name))
       );      
    } else {
      setUserList(userList2);
    }  
  };


   const handleFormat = (e) => {
     SETTAMANO(
       TAMANO.includes(e.target.name)
         ? TAMANO.filter((product) => product !== e.target.name)
         : [...TAMANO, e.target.name]
     );
   };
  const handlecomercial = (e) => {
    SETAREACOMERCIAL(
      AREACOMERCIAL.includes(e.target.value)
        ? AREACOMERCIAL.filter((product) => product !== e.target.value)
        : [...AREACOMERCIAL, e.target.value]
    );
  };
  const handleinstitucional = (e) => {    
    SETAREAINSTITUCIONAL(
      AREAINSTITUCIONAL.includes(e.target.value)
        ? AREAINSTITUCIONAL.filter((product) => product !== e.target.value)
        : [...AREAINSTITUCIONAL, e.target.value]
    );
  };

  const handleexterior = (e) => {
    SETAREAEXTERIOR(
      AREAEXTERIOR.includes(e.target.value)
        ? AREAEXTERIOR.filter((product) => product !== e.target.value)
        : [...AREAEXTERIOR, e.target.value]
    );
  };
  const handleconacceso = (e) => {
    SETCONACCEXTE(
      CONACCEXTE.includes(e.target.value)
        ? CONACCEXTE.filter((product) => product !== e.target.value)
        : [...CONACCEXTE, e.target.value]
    );
  };
  const handlesinacceso = (e) => {
    SETSINACCEXTE(
      SINACCEXTE.includes(e.target.value)
        ? SINACCEXTE.filter((product) => product !== e.target.value)
        : [...SINACCEXTE, e.target.value]
    );
  };

  return (
    <div className="container">
      <label>{Consec}</label>
      <div className="row">
        <Usos handleuso={handleuso} />
        <CheckInlineExample
          handleresidencial={handleresidencial}
          handlecomercial={handlecomercial}
          handleinstitucional={handleinstitucional}
          handleexterior={handleexterior}
        />
        <Accesosintext
          handleconacceso={handleconacceso}
          handlesinacceso={handlesinacceso}
        />
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
