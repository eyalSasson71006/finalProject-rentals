import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCurrentUser } from "../providers/UserProvider";
import { getUserData, getUsersApartments, getUsersReviews, login, signup } from "../users/services/usersApiService";
import { getUser, removeToken, setTokenInLocalStorage } from "../users/services/localStorageService";
import normalizeUser from "../users/helpers/normalization/normalizeUser";
import ROUTES from "../routes/routesModel";
import useAxios from "./useAxios";
import { useSnack } from "../providers/SnackbarProvider";


export default function useUsers() {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const [userData, setUserData] = useState();
    const { setUser, setToken } = useCurrentUser();
    const navigate = useNavigate();
    const setSnack = useSnack();

    useAxios();

    const handleLogin = async (userLogin) => {
        try {
            const token = await login(userLogin);
            setTokenInLocalStorage(token);
            setToken(token);
            setUser(getUser());
            navigate(ROUTES.ROOT);
        } catch (error) {
            setSnack("error", error.message);
            console.log(error.message);

        }
    };

    const handleLogout = () => {
        try {
            removeToken();
            setUser(null);
        } catch (error) {
            setSnack("error", error.message);
        }
    };

    const handleSignup = async (user) => {
        try {
            await signup(normalizeUser(user));
            await handleLogin({
                email: user.email,
                password: user.password
            });
        } catch (error) {
            setSnack("error", error.message);
        }
    };

    const getUserById = async (id) => {
        setIsLoading(true);
        setError(null);
        try {
            let user = await getUserData(id);
            setUserData(user);
            setIsLoading(false);
            return user;
        } catch (error) {
            setSnack("error", error.message);
            setError(error.message);
        }
        setIsLoading(false);
    };

    const handleGetUsersApartments = async (id) => {
        setIsLoading(true);
        setError(null);
        try {
            let apartments = await getUsersApartments(id);
            setIsLoading(false);
            return apartments;
        } catch (error) {
            setSnack("error", error.message);
            setError(error.message);
        }
        setIsLoading(false);
    };

    const handleGetUsersReviews = async (id) => {
        try {
            let reviews = await getUsersReviews(id);                        
            return reviews;
        } catch (error) {
            setSnack("error", error.message);
            setError(error.message);
        }
    };

    return { userData, setUserData, isLoading, error, handleLogin, handleLogout, handleSignup, getUserById, handleGetUsersApartments, handleGetUsersReviews };
}


