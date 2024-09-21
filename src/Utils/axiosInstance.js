import axios from "axios";


import {  CoinList_API_URL } from "./config";

const axiosInstance = axios.create({
    baseURL: CoinList_API_URL,
})


export default axiosInstance;