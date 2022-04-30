import axios from "axios";
import { toast } from 'react-toastify';

export const api = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
  Authorization: ''
})
//TODO: descomentar lógica e criar  estrutura para interceptacao de requests(ex,sessão ou token expirada, tratamento de errors em request para api etc)
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error.response, 'uuu')
    switch(error.response.status){
      //TODO: adicionar tratamento 
      // case 401:
      // break 
      // case 500:
      // break
      default:
        toast.error(`${error.response.data.message}`);
      break;
    }
 
    if (error.response.status == 400) {
    }
    return Promise.reject(error);
  }
);