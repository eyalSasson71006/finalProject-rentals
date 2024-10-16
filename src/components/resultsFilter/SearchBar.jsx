import {
	Box,
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ROUTES from "../../routes/routesModel";
import { useNavigate, useSearchParams } from "react-router-dom";
import AutoCompleteSearch from "../resultsFilter/AutoCompleteSearch";
import FilterNumberInput from "../resultsFilter/components/FilterNumberInput";
import { sortAlphabetically } from "../../helpers/helperFunctions";

export default function SearchBar({ locations, reRender = () => {} }) {
	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();
	const [search, setSearch] = useState({
		location: searchParams.get("location") || "",
		propertyType: searchParams.get("propertyType") || "",
		bedrooms: searchParams.get("bedrooms") || 0,
		guests: searchParams.get("guests") || 0,
	});

	function handleChange(e) {
		const { name, value, type, innerText } = e.target;
		let isLocation = innerText ? true : false;

		let newValue = isLocation
			? innerText
			: type === "number"
			? Number(value)
			: value;
		let paramName = isLocation ? "location" : name;

		setSearch((prev) => ({
			...prev,
			[paramName]: newValue,
		}));
		setSearchParams((prev) => {
			const newParams = new URLSearchParams(prev);
			newParams.set(paramName, newValue);
			return newParams;
		});
	}

	const textFieldSx = {
		color: "black",
		"& .MuiInputLabel-root": {
			color: "black",
			"&.MuiInputLabel-shrink": {
				color: "black",
			},
		},
		"& .MuiSvgIcon-root": {
			color: "black",
		},
		"& .MuiOutlinedInput-root": {
			"& fieldset": {
				borderColor: "gray",
			},
			"&:hover fieldset": {
				borderColor: "black",
			},
			"&.Mui-focused fieldset": {
				borderColor: "black",
			},
			backgroundColor: "white",
			borderRadius: "5px",
			color: "black",
		},
	};
	function handleSearch() {
		reRender();
		navigate(`${ROUTES.SEARCH_RESULTS}?${searchParams.toString()}`);
	}

	return (
		<Box
			component="form"
			sx={{
				display: "flex",
				justifyContent: "center",
				padding: "10px 20px",
				borderRadius: "50px",
				gap: "7px",
				border: "1px solid gray",
				width: "fit-content",
				maxWidth: "80vw",
				margin: "0 auto",
				backgroundColor: "white",
			}}
		>
			<AutoCompleteSearch
				initialValue={search.location}
				sx={textFieldSx}
				handleChange={handleChange}
				locations={sortAlphabetically(locations)}
			/>
			<FormControl
				sx={{
					...textFieldSx,
					minWidth: "200px",
					display: { xs: "none", md: "inline-flex" },
				}}
			>
				<InputLabel id={"propertyType"}>{"Property Type"}</InputLabel>
				<Select
					labelId={"propertyType"}
					id={"propertyType"}
					name={"propertyType"}
					label={"Property Type"}
					value={search.propertyType}
					onChange={handleChange}
				>
					{["Any", "Apartment", "House", "Penthouse", "Studio"].map(
						(item, index) => (
							<MenuItem key={item + index} value={item}>
								{item}
							</MenuItem>
						)
					)}
				</Select>
			</FormControl>
			<Button variant="contained" onClick={handleSearch}>
				<SearchIcon />
			</Button>
		</Box>
	);
}
