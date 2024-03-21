import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsearch.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': process.env.API_KEY,
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  }
});
export default instance;
