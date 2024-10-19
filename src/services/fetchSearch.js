import axiosInstance from "../Utils/axiosInstance";

export async function fetchSearch(searchCoin) {
    try {
        const response = await axiosInstance.get(`/search?query=${searchCoin}`);
        const data = response.data.coins;
        // const coinData = data.length > 8 ? data.slice(0, 8) : data;
        console.log(data); // For debugging
        return data;
    } catch (error) {
        console.error("Error fetching search coin data:", error);
        return [];
    }
}
