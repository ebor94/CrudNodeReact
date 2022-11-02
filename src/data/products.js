import axios from "axios";

export const InfoProd = async () => {
  let url = "https://www.ceramicaitalia.com/carritosap/sala/bd/busqueda.php";
  let datax;
  let i;
  let sesation;

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
        }
       return datax; 
     } else {
       return datax;
      }
     });

  return res;

};


