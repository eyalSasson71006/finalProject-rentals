import axios from "axios";

const apiUrl = "http://localhost:8181/apartments";

export const getApartments = async (params={}) => {
    try {
        const response = await axios.get(apiUrl, {
            params: {
                ...params
            }
        });
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
};

export const getApartmentById = async (id) => {
    try {
        const response = await axios.get(`${apiUrl}/${id}`);
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

export const deleteApartment = async (id) => {
    try {
        const response = await axios.delete(`${apiUrl}/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
};

export const editApartment = async (id, apartment) => {
    try {
        const { data } = await axios.put(`${apiUrl}/${id}`, apartment);
        return data;
    } catch (error) {
        throw new Error(error);
    }
};

export const changeLikeStatus = async (id) => {
    try {
        const response = await axios.patch(`${apiUrl}/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
};
export const changeAvailableStatus = async (id) => {
    try {
        const response = await axios.patch(`${apiUrl}/available/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
};

export const addReview = async (id, review) => {
    try {
        const response = await axios.patch(`${apiUrl}/review/${id}`, review);
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
};



