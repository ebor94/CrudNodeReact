import axios from "axios";
const url = "https://www.ceramicaitalia.com/carritosap/sala/bd/busqueda.php";
export const InfoProd = async () => {
 
  let datax;
  let i;
  let sesation;
  let space;

 const res = await  axios.post(url, {
       opcion: 12,
       user: "bortega",
       vendedor: "I5",
       store: localStorage.store,
     })
   .then((res) => {
     datax = res.data.ZMM_ARBOL_PROD.item;
     if (datax.length > 0) {
       for (i = 0; i < datax.length; i++) { 
         sesation = datax[i].SENSACION.split("|");
         datax[i].SENSACION = sesation;
       space = datax[i].ESPACIO.split("|");
         datax[i].ESPACIO = space;
        }
       return datax; 
     } else {
       return datax;
      }
     });

  return res;

};

export const getPrice = async (material) => {
  let price;
  const res = await axios.post(url, {
    opcion: 5,
    canal: "60",
    ofventas: "110",
    orgventas: "1000",
    material: material,
    store: "1401",
  });
  price = Math.round(res.data.PRCTE * 1.19);
  return price;

  
};
