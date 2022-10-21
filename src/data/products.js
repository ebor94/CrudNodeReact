import axios from "axios";

export const InfoProd = async () => {
  let url = "https://www.ceramicaitalia.com/carritosap/sala/bd/busqueda.php";
  let res;
  res = await axios.post(url, {
    opcion: 12,
    user: "bortega",
    vendedor: "I5",
    store: localStorage.store,
  });

  //console.log(res.data.ZMM_ARBOL_PROD.item)
  return res.data.ZMM_ARBOL_PROD.item;
};
