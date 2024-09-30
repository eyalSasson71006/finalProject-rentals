import axios from "axios";
import { getToken } from "../../users/services/localStorageService";

const apiUrl = "http://localhost:8181/chat";

export const getChatById = async (chatId) => {
    try {
        const response = await axios.get(`${apiUrl}/${chatId}`, {
            headers: {
                ["x-auth-token"]: getToken(),
            },
        });
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
};