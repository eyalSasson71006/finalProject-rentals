import axios from "axios";

const apiUrl = "http://localhost:8181/users";

export const login = async (userLogin) => {
    try {
        const response = await axios.post(apiUrl + "/login", userLogin);
        return response.data;
    } catch (err) {
        throw new Error(err.message);
    }
};

export const signup = async (normalizedUser) => {
    try {
        console.log(normalizedUser);
        
        const { data } = await axios.post(apiUrl, normalizedUser);
        return data;
    } catch (err) {
        throw new Error(err.message);
    }
};

export const getUserData = async (id) => {
    try {
        const response = await axios.get(`${apiUrl}/${id}`);
        return response.data;
    } catch (err) {
        throw new Error(err.message);
    }
};

export const getUsersApartments = async (id) => {
    try {
        const response = await axios.get(`${apiUrl}/users-apartments/${id}`);
        return response.data;
    } catch (err) {
        throw new Error(err.message);
    }
};