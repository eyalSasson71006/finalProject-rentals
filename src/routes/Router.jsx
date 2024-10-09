import React from "react";
import { Route, Routes } from "react-router-dom";
import ROUTES from "./routesModel";
import MainPage from "../pages/MainPage";
import SearchResults from "../pages/apartments/SearchResults";
import ErrorPage from "../pages/ErrorPage";
import ApartmentInfoPage from "../pages/apartments/ApartmentInfoPage";
import UserInfoPage from "../pages/users/UserInfoPage";
import FavoritesPage from "../pages/apartments/FavoritesPage";
import LoginPage from "../pages/users/LoginPage";
import SignupPage from "../pages/users/SignupPage";
import AddApartmentPage from "../pages/apartments/AddApartmentPage";
import EditApartmentPage from "../pages/apartments/EditApartmentPage";
import EditUserPage from "../pages/users/EditUserPage";
import ChatPage from "../pages/ChatPage";
import ScrollToTop from "../components/ScrollToTop";

export default function Router() {
	return (
		<>
			<ScrollToTop />
			<Routes>
				<Route path={ROUTES.ROOT} element={<MainPage />} />
				<Route path={ROUTES.LOGIN} element={<LoginPage />} />
				<Route path={ROUTES.SIGNUP} element={<SignupPage />} />
				<Route
					path={ROUTES.SEARCH_RESULTS}
					element={<SearchResults />}
				/>
				<Route
					path={ROUTES.FAV_APARTMENTS}
					element={<FavoritesPage />}
				/>
				<Route
					path={ROUTES.CREATE_APARTMENT}
					element={<AddApartmentPage />}
				/>
				<Route
					path={ROUTES.APARTMENT_INFO + "/:id"}
					element={<ApartmentInfoPage />}
				/>
				<Route
					path={ROUTES.EDIT_APARTMENT + "/:id"}
					element={<EditApartmentPage />}
				/>
				<Route
					path={ROUTES.USER_PROFILE + "/:id"}
					element={<UserInfoPage />}
				/>
				<Route
					path={ROUTES.EDIT_USER + "/:id"}
					element={<EditUserPage />}
				/>
				<Route path={ROUTES.CHAT} element={<ChatPage />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</>
	);
}
