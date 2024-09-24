import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import { Box } from "@mui/material";
import FilterResults from "../components/resultsFilter/FilterResults";
import { useSearchParams } from "react-router-dom";
import CardsListComponent from "../components/cards/CardsListComponent";
import Spinner from "../components/Spinner";
import Error from "../components/Error";
import useApartments from "../hooks/useApartments";

export default function SearchResults() {
	let [searchParams, setSearchParams] = useSearchParams();
	const queryParams = Object.fromEntries([...searchParams]);
	const {
		handleGetFilterParams,
		getAllApartments,
		filterParams,
		apartments,
		isLoading,
		error,
	} = useApartments();

	const [render, setRender] = useState();

	const reRender = () => {
		setRender((prev) => !prev);
	};

	const resetParams = () => {
		setSearchParams("");
		reRender();
	};

	useEffect(() => {
		if (apartments.length == 0) handleGetFilterParams();
		getAllApartments(queryParams);
	}, [render]);

	if (isLoading) return <Spinner />;
	if (error) return <Error errorMessage={error} />;

	return (
		<Box p={5}>
			<SearchBar
				locations={filterParams?.locations}
				reRender={reRender}
			/>
			<Box sx={{ display: "flex" }}>
				<Box sx={{ position: "sticky", top: "100px" }}>
					<FilterResults
						filterParams={filterParams}
						resetFunc={resetParams}
					/>
				</Box>
				<Box sx={{ width: "100%" }}>
					<CardsListComponent apartments={apartments} />
				</Box>
			</Box>
		</Box>
	);
}
