import { useState } from "react";
import { getApartmentById, getApartments } from "../apartments/services/apartmentsApiService";
import useAxios from "./useAxios";


export default function useApartments() {
    const [apartments, setApartments] = useState([]);
    const [apartment, setApartment] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    useAxios()

    const getAllApartments = async () => {
        setIsLoading(true);
        try {
            let allApartments = await getApartments();
            setApartments(allApartments);
        } catch (error) {
            setError(err.message);
        }
        setIsLoading(false);
    };

    const getApartment = async (id) => {
        setIsLoading(true);
        try {
            let data = await getApartmentById(id);
            setApartment(data);
            setIsLoading(false);
            return data;
        } catch (error) {
            setError(err.message);
        }
        setIsLoading(false);
    };

    return { apartments, setApartments, apartment, setApartment, isLoading, setIsLoading, error, setError, getAllApartments, getApartment };
}