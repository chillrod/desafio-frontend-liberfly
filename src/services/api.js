import axios from 'axios';

const apiApp = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
});

export default apiApp;
