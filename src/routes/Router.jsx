import React from "react";
import { Route, Routes } from "react-router-dom";
import ROUTES from "./routesModel";
import SearchPage from "../pages/SearchPage";
import SearchResults from "../pages/SearchResults";
import ErrorPage from "../pages/ErrorPage";

export default function Router() {
	return (
		<Routes>
			<Route path={ROUTES.ROOT} element={<SearchPage />} />
			<Route path={ROUTES.SEARCH} element={<SearchPage />} />
			<Route path={ROUTES.SEARCH_RESULTS} element={<SearchResults />} />
			<Route path="*" element={<ErrorPage />} />
		</Routes>
	);
}
