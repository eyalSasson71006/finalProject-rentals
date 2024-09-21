import { useCallback, useState } from "react";
import { addReview, changeLikeStatus, createApartment, deleteApartment, editApartment, getApartmentById, getApartments, getApartmentsReviews } from "../apartments/services/apartmentsApiService";
import useAxios from "./useAxios";
import normalizeApartment from "../apartments/helpers/normalization/normalizeApartment";
import { useNavigate } from "react-router-dom";
import ROUTES from "../routes/routesModel";
import { useCurrentUser } from "../providers/UserProvider";
import useUsers from "./useUsers";


export default function useApartments() {
    const [apartments, setApartments] = useState([]);
    const [apartment, setApartment] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const [error, setError] = useState();
    const { user } = useCurrentUser();
    const { handleGetUsersReviews } = useUsers();

    useAxios();

    const getAllApartments = async (params={}) => {
        setIsLoading(true);
        try {
            let allApartments = await getApartments(params);            
            setApartments(allApartments);
        } catch (error) {
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
            setError(err.message);
        }
        setIsLoading(false);
    };

    const handleDelete = useCallback((id) => {
        try {
            deleteApartment(id);
            // setSnack("info", `Card ${id} was deleted successfully`);
        } catch (err) {
            // setSnack("error", err.message);
            console.log(err.message);
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
            // setSnack("error", err.message);
            console.log(err.message);
        }
    }, [user]);

    const handleAddReview = useCallback(async (id, review) => {
        try {
            let { owner } = await getApartmentById(id)            
            handleGetUsersReviews(owner) // updates owner's rating after review
            handleGetApartmentsReviews(id); // updates apartment's rating after review
            let reviews = await addReview(id, review);            
            return reviews;
        } catch (err) {
            // setSnack("error", err.message);
            console.log(err.message);
        }
    }, [user]);

    const handleGetApartmentsReviews = async (id) => {
        try {
            let reviews = await getApartmentsReviews(id);
            return reviews;
        } catch (err) {
            setError(err.message);
            // setSnack("error", err.message);
        }
    };

    return { apartments, setApartments, apartment, setApartment, isLoading, setIsLoading, error, setError, getAllApartments, getApartment, addApartment, handleDelete, handleEdit, handleLike, handleAddReview };
}