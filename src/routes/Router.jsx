import React from "react";
import { Route, Routes } from "react-router-dom";
import ROUTES from "./routesModel";
import MainPage from "../pages/MainPage";
import SearchResults from "../pages/SearchResults";
import ErrorPage from "../pages/ErrorPage";

export default function Router() {
	return (
		<Routes>
			<Route path={ROUTES.ROOT} element={<MainPage />} />
			<Route path={ROUTES.SEARCH_RESULTS} element={<SearchResults />} />
			<Route path="*" element={<ErrorPage />} />
		</Routes>
	);
}
