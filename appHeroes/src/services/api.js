import axios from 'axios';
  const url = 'http://gateway.marvel.com/v1/public/';

  const api = axios.create({
      baseURL: url,
       timeout: 1000,
       headers: {'Content-Type': 'application/json'}
   })

    export default api;