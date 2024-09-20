import { useCallback, useState } from "react";
import { changeLikeStatus, createApartment, deleteApartment, editApartment, getApartmentById, getApartments } from "../apartments/services/apartmentsApiService";
import useAxios from "./useAxios";
import normalizeApartment from "../apartments/helpers/normalization/normalizeApartment";
import { useNavigate } from "react-router-dom";
import ROUTES from "../routes/routesModel";


export default function useApartments() {
    const [apartments, setApartments] = useState([]);
    const [apartment, setApartment] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const [error, setError] = useState();

    useAxios();

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

    const addApartment = async (apartment) => {
        setIsLoading(true);
        try {
            let data = normalizeApartment(apartment);
            await createApartment(data);
            setIsLoading(false);
            navigate(ROUTES.ROOT);
            return data;
        } catch (error) {
            setError(err.message);
        }
        setIsLoading(false);
    };

    const handleDelete = useCallback((id) => {
        try {
            deleteApartment(id);
            // setSnack("info", `Card ${id} was deleted successfully`);
        } catch (err) {
            setSnack("error", err.message);
        }
    }, []);

    const handleEdit = useCallback(async (id, apartment) => {
        try {
            await editApartment(id, normalizeApartment(apartment));
            // setSnack("success", "Card edited successfully!");
            setTimeout(() => {
                navigate(ROUTES.MY_APARTMENTS);
            }, 2000);
        } catch (err) {
            setError(err.message);
            // setSnack("error", err.message);
        }
    }, []);


    const handleLike = useCallback(async (id) => {
        try {
            let apartment = await changeLikeStatus(id);
            return apartment.likes.includes(user._id);
        } catch (err) {
            setSnack("error", err.message);
        }
    }, [user]);

    return { apartments, setApartments, apartment, setApartment, isLoading, setIsLoading, error, setError, getAllApartments, getApartment, addApartment, handleDelete, handleEdit, handleLike };
}