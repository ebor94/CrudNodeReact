import axios from "axios";
let url = "https://www.ceramicaitalia.com/carritosap/sala/bd/busqueda.php";
 
export const Consecutive = async () => {
    if (typeof (localStorage.code) === 'undefined' || localStorage.code === '') {
        const response = await axios.post(url, {
            opcion: 3,
            tdoc: localStorage.tdoc,
        }).then((res) => {
            localStorage.code = res.data;
            return res.data;
        })
        return response;
    } else {
       return localStorage.code;  
    }
}