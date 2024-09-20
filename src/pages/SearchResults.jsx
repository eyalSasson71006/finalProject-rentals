import React from "react";
import SearchBar from "../components/SearchBar";
import { Box } from "@mui/material";
import FilterResults from "../components/resultsFilter/FilterResults";
import { useSearchParams } from "react-router-dom";
import CardsListComponent from "../apartments/cards/CardsListComponent";

export default function SearchResults() {
	let [searchParams, setSearchParams] = useSearchParams();
	
	return (
		<Box p={5}>
			<SearchBar />
			<Box sx={{ display: "flex" }}>
				<Box sx={{ position: "sticky", top: "100px" }}>
					<FilterResults />
				</Box>
				<Box sx={{ flexGrow: "0" }}>
					{/* <CardsListComponent /> */}
				</Box>
			</Box>
		</Box>
	);
}
