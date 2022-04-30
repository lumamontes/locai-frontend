import axios from "axios";

export const api = axios.create({
  baseURL:"http://localhost:8080/api",
  Authorization: ''
})
//TODO: descomentar lógica e criar  estrutura para interceptacao de requests(ex,sessão ou token expirada, tratamento de errors em request para api etc)
// api.interceptors.response.use(
//   function (response) {
//     return response;
//   }, 
//   function (error) {
//     let res = error.response;
//     if (res.status == 401) {
//       window.location.href = "http://localhost:3000/"
//     }
//     console.error(res.status);
//     return Promise.reject(error);
//   }
// );