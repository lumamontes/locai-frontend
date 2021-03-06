import axios from "axios";
import { toast } from 'react-toastify';
const initialUser = () => {
  const item = window.localStorage.getItem('user')
  return item ? JSON.parse(item) : null
}
export const api = axios.create({
  baseURL:'https://locai-k39bx.ondigitalocean.app/api',
  // baseURL: 'http://localhost:8080/api/',
  Authorization: ''
})
api.defaults.headers.Authorization = `Bearer ${initialUser() !== null && initialUser().token}`
//TODO: descomentar lógica e criar  estrutura para interceptacao de requests(ex,sessão ou token expirada, tratamento de errors em request para api etc)
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    toast.dismiss()
    console.log(error.response.data.code)
    switch (error.response.data?.code) {
      case 'user.invalid_password':
        toast.error(`Senha incorreta! Tente novamente.`, {
          hideProgressBar: true
        });
        break
        case 'user.not_found':
          toast.error(`Usuário não encontrado! Tente novamente.`, {
            hideProgressBar: true
          });
        break
        //   default:
        //     toast.error(`${error.response.data.message}`, {
        //       hideProgressBar:true
        //     });
        break;
    }

    if (error.response.status === 500) {
      toast.error('Ops algo deu errado. Por favor tente novamente', {
        hideProgressBar:true
      })
    }
    return Promise.reject(error);
  }
);