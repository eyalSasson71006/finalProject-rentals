import React from "react";
import { Route, Routes } from "react-router-dom";
import ROUTES from "./routesModel";
import MainPage from "../pages/MainPage";
import SearchResults from "../pages/SearchResults";
import ErrorPage from "../pages/ErrorPage";
import ApartmentInfoPage from "../pages/ApartmentInfoPage";
import UserInfoPage from "../pages/UserInfoPage";

export default function Router() {
	return (
		<Routes>
			<Route path={ROUTES.ROOT} element={<MainPage />} />
			<Route path={ROUTES.SEARCH_RESULTS} element={<SearchResults />} />
			<Route
				path={ROUTES.APARTMENT_INFO + "/:id"}
				element={<ApartmentInfoPage />}
			/>
			<Route
				path={ROUTES.USER_PROFILE + "/:id"}
				element={<UserInfoPage />}
			/>
			<Route path="*" element={<ErrorPage />} />
		</Routes>
	);
}
