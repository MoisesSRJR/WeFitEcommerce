import axios from 'axios';

export function setupAPI() {
   const api = axios.create({
      baseURL: 'http://localhost:3000/products',
   });

   return api;
}
