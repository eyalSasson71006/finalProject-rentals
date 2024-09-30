import axios from "axios";

const apiUrl = "http://localhost:8181/chat";

export const getChatById = async (chatId) => {    
    try {
        const response = await axios.get(`${apiUrl}/${chatId}`);
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
};

export const getMyChats = async () => {    
    try {
        const response = await axios.get(`${apiUrl}/my-chats`);        
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
};