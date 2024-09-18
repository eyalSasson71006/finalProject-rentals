import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCurrentUser } from "../providers/UserProvider";
import { getUserData, getUsersApartments, login, signup } from "../users/services/usersApiService";
import { getUser, removeToken, setTokenInLocalStorage } from "../users/services/localStorageService";
import normalizeUser from "../users/helpers/normalization/normalizeUser";
import ROUTES from "../routes/routesModel";
import useAxios from "./useAxios";


export default function useUsers() {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const { setUser, setToken } = useCurrentUser();
    const navigate = useNavigate();

    useAxios();

    const handleLogin = async (userLogin) => {
        try {
            const token = await login(userLogin);
            setTokenInLocalStorage(token);
            setToken(token);
            setUser(getUser());
            navigate(ROUTES.ROOT);
        } catch (err) {
            // setSnack("error", err.message);
            console.log(err.message);

        }
    };

    const handleLogout = () => {
        try {
            removeToken();
            setUser(null);
        } catch (err) {
            // setSnack("error", err.message);
            console.log(err.message);
        }
    };

    const handleSignup = async (user) => {
        try {
            // console.log(normalizeUser(user));
            await signup(normalizeUser(user));
            await handleLogin({
                email: user.email,
                password: user.password
            });
            // setSnack("success", "Signed up successfully!");
        } catch (err) {
            // setSnack("error", err.message);
            console.log(err.message);
        }
    };

    const getUserById = async (id) => {
        setIsLoading(true);
        setError(null);
        try {
            let user = await getUserData(id);
            setIsLoading(false);
            return user;
        } catch (err) {
            setError(err.message);
            // setSnack("error", err.message);
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
        } catch (err) {
            setError(err.message);
            // setSnack("error", err.message);
        }
        setIsLoading(false);
    };

    return { isLoading, error, handleLogin, handleLogout, handleSignup, getUserById, handleGetUsersApartments };
}


