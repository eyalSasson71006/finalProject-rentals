import axios from "axios";

const apiUrl = "http://localhost:8181/apartments";

export const getApartments = async () => {
    try {
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
};

export const createApartment = async (card) => {
    try {
        const { data } = await axios.post(apiUrl, card);
        return data;
    } catch (error) {
        throw new Error(error);
    }
};

