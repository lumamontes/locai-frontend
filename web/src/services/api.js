import axios from "axios";
import { toast } from 'react-toastify';

export const api = axios.create({
  baseURL:'https://tcc-backend-w3aet.ondigitalocean.app/api/',
  // baseURL:'http://localhost:8080/api/',
  Authorization: ''
})
//TODO: descomentar lógica e criar  estrutura para interceptacao de requests(ex,sessão ou token expirada, tratamento de errors em request para api etc)
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // console.log(error.response.data, 'uuu')
    // switch(error.response.status){
    //   //TODO: adicionar tratamento quit
    //   // case 401:
    //   // break 
    //   // case 500:
    //   // break
    //   default:
    //     toast.error(`${error.response.data.message}`, {
    //       hideProgressBar:true
    //     });
    //   break;
    // }
 
    if (error.response.status == 400) {
    }
    return Promise.reject(error);
  }
);