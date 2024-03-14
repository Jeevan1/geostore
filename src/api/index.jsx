import axios from "axios";

const API = axios.create({
    baseURL: 'https://fakestoreapi.com',
    baseURL2: 'http://localhost:5174',
});


export default API;