import axios from 'axios';

const api = axios.create({
  baseURL: 'http://api-desenv.grupobfc.com.br/',
});

export default api;
