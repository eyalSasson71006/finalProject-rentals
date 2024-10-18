import { useCallback, useState } from "react";
import { addReview, changeAvailableStatus, changeLikeStatus, createApartment, deleteApartment, editApartment, getApartmentById, getApartments } from "../apartments/services/apartmentsApiService";
import useAxios from "./useAxios";
import normalizeApartment from "../apartments/helpers/normalization/normalizeApartment";
import { useNavigate } from "react-router-dom";
import ROUTES from "../routes/routesModel";
import { useCurrentUser } from "../providers/UserProvider";
import useUsers from "./useUsers";
import { useSnack } from "../providers/SnackbarProvider";
import getFilterParams from "../helpers/getFilterParams";


export default function useApartments() {
    const [apartments, setApartments] = useState([]);
    const [apartment, setApartment] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [filterParams, setFilterParams] = useState();
    const navigate = useNavigate();
    const [error, setError] = useState();
    const { user } = useCurrentUser();
    const { handleGetUsersReviews } = useUsers();
    const setSnack = useSnack();

    useAxios();

    const getAllApartments = useCallback(async (params={}) => {
        setIsLoading(true);
        try {
            let filteredApartments = await getApartments(params);
            setApartments(filteredApartments);
        } catch (error) {
            setSnack("error", error.message);
            setError(error.message);
        }
        setIsLoading(false);
    }, []);

    const getApartment = useCallback(async (id) => {
        setIsLoading(true);
        try {
            let data = await getApartmentById(id);
            setApartment(data);
            setIsLoading(false);
            return data;
        } catch (error) {
            setSnack("error", error.message);
            setError(error.message);
        }
        setIsLoading(false);
    }, []);
    
    const addApartment = useCallback(async (apartment) => {
        setIsLoading(true);
        try {
            let data = normalizeApartment(apartment);
            await createApartment(data);
            setIsLoading(false);
            setSnack("success", "Apartment Added successfully!");
            navigate(ROUTES.ROOT);
            return data;
        } catch (error) {
            setSnack("error", error.message);
            setError(error.message);
        }
        setIsLoading(false);
    }, []);

    const handleDelete = useCallback((id) => {
        try {
            deleteApartment(id);
        } catch (error) {
            setSnack("error", error.message);
        }
    }, []);

    const handleEdit = useCallback(async (id, apartment) => {
        try {
            await editApartment(id, normalizeApartment(apartment));
            setSnack("success", "Apartment edited successfully!");
            navigate(ROUTES.ROOT);
        } catch (error) {
            setSnack("error", error.message);
            setError(error.message);
        }
    }, []);


    const handleLike = useCallback(async (id) => {
        try {
            let apartment = await changeLikeStatus(id);
            return apartment.likes.includes(user._id);
        } catch (error) {
            setSnack("error", error.message);
        }
    }, [user]);

    const toggleAvailability = useCallback(async (id) => {
        try {
            let isAvailable = await changeAvailableStatus(id);
            return isAvailable;
        } catch (error) {
            setSnack("error", error.message);
        }
    }, [user]);

    const handleAddReview = useCallback(async (id, review) => {
        try {
            let reviews = await addReview(id, review);
            return reviews;
        } catch (error) {
            setSnack("error", error.message);
        }
    }, [user]);

    const handleGetFilterParams = useCallback(async () => {
        try {
            let allApartments = await getApartments();
            setFilterParams(getFilterParams(allApartments));
        } catch (error) {
            setSnack("error", error.message);
            setError(error.message);
        }
    }, []);

    return { apartments, setApartments, apartment, setApartment, isLoading, setIsLoading, error, setError, getAllApartments, handleGetFilterParams, getApartment, addApartment, handleDelete, handleEdit, handleLike, handleAddReview, filterParams, setFilterParams, toggleAvailability };
}