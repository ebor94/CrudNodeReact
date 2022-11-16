import axios from "axios";
let url = "https://www.ceramicaitalia.com/carritosap/sala/bd/clienteqas.php";

export const getDepartament = async() => {
    
    const res = await axios.post(url, {
        opcion : 5
    }).then((res)=>{
        return res.data.DPTOS.item;
    });
    return res;
}


export const getCity = async (region) => {
    const res = await axios.post(url, {
      opcion: 4,
      REGION: region 
    }).then((res) => {
        return  res.data
    });
  return res;   
}