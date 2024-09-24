
import axiosInstance from "../Utils/axiosInstance";


export async function fetchCoinData(currency) {
    


    try {
        const response = await axiosInstance.get(`/coins/markets?vs_currency=${currency}`);
        // console.log(response);
        return response.data;
    } catch(error) {
        console.log(error);
        return error;
    }
}

