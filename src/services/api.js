import axios from 'axios';

const api = axios.create({
  baseURL: 'https://realstatesolution.herokuapp.com',
});

export default api;