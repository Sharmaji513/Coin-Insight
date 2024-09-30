
import axiosInstance from '../Utils/axiosInstance';

export async function fetchCoinHistoricData(id,currency = 'usd', days = 7,  interval) {
    try {
        const response = await axiosInstance.get(`/coins/${id}/market_chart?days=${days}&vs_currency=${currency}&interval=${interval}`);
        // console.log(response); 
        return response.data;

    } catch(error) {
        // console.error(error);
        return null;
    }
}

