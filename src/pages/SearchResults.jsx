import React from "react";
import SearchBar from "../components/SearchBar";
import { Box } from "@mui/material";
import CardsListComponent from "../cards/CardsListComponent";
import FilterResults from "../components/resultsFilter/FilterResults";

export default function SearchResults() {
	return (
		<Box py={5}>
			<SearchBar />
			<Box sx={{ display: "flex" }}>
				<Box sx={{ position: "sticky", top: "100px" }}>
					<FilterResults />
				</Box>
				<Box sx={{ flexGrow: "0" }}>
					<CardsListComponent />
				</Box>
			</Box>
		</Box>
	);
}
