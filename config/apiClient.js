import axios from "axios";


const API_ENDPOINT = "http://localhost:1337/";

const apiClient = axios.create({
    baseURL: API_ENDPOINT,
});


export default apiClient;
