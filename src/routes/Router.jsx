import React from "react";
import { Route, Routes } from "react-router-dom";
import ROUTES from "./routesModel";
import MainPage from "../pages/MainPage";
import SearchResults from "../pages/SearchResults";
import ErrorPage from "../pages/ErrorPage";
import ApartmentInfoPage from "../pages/ApartmentInfoPage";
import UserInfoPage from "../pages/UserInfoPage";
import FavoritesPage from "../pages/FavoritesPage";
import MyApartmentsPage from "../pages/MyApartmentsPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import AddApartmentPage from "../pages/AddApartmentPage";
import EditApartmentPage from "../pages/EditApartmentPage";

export default function Router() {
	return (
		<Routes>
			<Route path={ROUTES.ROOT} element={<MainPage />} />
			<Route path={ROUTES.LOGIN} element={<LoginPage />} />
			<Route path={ROUTES.SIGNUP} element={<SignupPage />} />
			<Route path={ROUTES.SEARCH_RESULTS} element={<SearchResults />} />
			<Route path={ROUTES.FAV_APARTMENTS} element={<FavoritesPage />} />
			<Route path={ROUTES.MY_APARTMENTS} element={<MyApartmentsPage />} />
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
			<Route path="*" element={<ErrorPage />} />
		</Routes>
	);
}
