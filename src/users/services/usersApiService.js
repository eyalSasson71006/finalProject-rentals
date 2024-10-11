import axios from "axios";

const apiUrl = "http://localhost:8181/users";


export const getAllUsersData = async () => {

    try {
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (err) {
        throw new Error(err.message);
    }
};

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
        const { data } = await axios.post(apiUrl, normalizedUser);
        return data;
    } catch (err) {
        throw new Error(err.message);
    }
};

export const editUser = async (id, newUser) => {
    try {        
        const { data } = await axios.put(`${apiUrl}/${id}`, newUser);
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

export const getUsersReviews = async (id) => {
    try {
        const response = await axios.get(`${apiUrl}/users-reviews/${id}`);
        return response.data;
    } catch (err) {
        throw new Error(err.message);
    }
};

export const deleteUser = async (id) => {
    try {
        const response = await axios.delete(`${apiUrl}/${id}`);
        return response.data;
    } catch (err) {
        throw new Error(err.message);
    }
};


export const toggleOwnerUser = async (id) => {

    try {
        const response = await axios.patch(`${apiUrl}/${id}`);
        return response.data;
    } catch (err) {
        throw new Error(err.message);
    }
}; 