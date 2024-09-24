import { useCallback, useState } from "react";
import { addReview, changeLikeStatus, createApartment, deleteApartment, editApartment, getApartmentById, getApartments, getApartmentsReviews } from "../apartments/services/apartmentsApiService";
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

    const getAllApartments = async () => {
        setIsLoading(true);
        try {
            let allApartments = await getApartments();
            setApartments(allApartments);
            setFilterParams(getFilterParams(allApartments));
        } catch (error) {
            setSnack("error", error.message);
            setError(error.message);
        }
        setIsLoading(false);
    };

    const getFilteredApartments = async (params = {}) => {
        setIsLoading(true);
        try {
            let filteredApartments = await getApartments(params);
            setApartments(filteredApartments);
        } catch (error) {
            setSnack("error", error.message);
            setError(error.message);
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
            setSnack("error", error.message);
            setError(error.message);
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
            setSnack("error", error.message);
            setError(error.message);
        }
        setIsLoading(false);
    };

    const handleDelete = useCallback((id) => {
        try {
            deleteApartment(id);
            setSnack("info", `Apartment ${id} was deleted successfully`);
        } catch (error) {
            setSnack("error", error.message);
        }
    }, []);

    const handleEdit = useCallback(async (id, apartment) => {
        try {
            await editApartment(id, normalizeApartment(apartment));
            setSnack("success", "Apartment edited successfully!");
            setTimeout(() => {
                navigate(ROUTES.MY_APARTMENTS);
            }, 2000);
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

    const handleAddReview = useCallback(async (id, review) => {
        try {
            let { owner } = await getApartmentById(id);
            handleGetUsersReviews(owner); // updates owner's rating after review
            handleGetApartmentsReviews(id); // updates apartment's rating after review
            let reviews = await addReview(id, review);
            return reviews;
        } catch (error) {
            setSnack("error", error.message);
        }
    }, [user]);

    const handleGetApartmentsReviews = async (id) => {
        try {
            let reviews = await getApartmentsReviews(id);
            return reviews;
        } catch (error) {
            setSnack("error", error.message);
            setError(error.message);
        }
    };

    return { apartments, setApartments, apartment, setApartment, isLoading, setIsLoading, error, setError, getAllApartments, getFilteredApartments, getApartment, addApartment, handleDelete, handleEdit, handleLike, handleAddReview, filterParams, setFilterParams };
}