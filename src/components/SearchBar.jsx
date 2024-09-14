import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ROUTES from "../routes/routesModel";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function SearchBar() {
	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();
	const [search, setSearch] = useState({
		location: searchParams.get("location") || "",
		date_from: searchParams.get("date_from") || "",
		date_to: searchParams.get("date_to") || "",
		guests: searchParams.get("guests") || 1,
	});

	function handleChange(e) {
		const { name, value, type } = e.target;
		setSearch((prev) => ({
			...prev,
			[name]: type === "number" ? Number(value) : value,
		}));
		setSearchParams((prev) => {
			const newParams = new URLSearchParams(prev);
			newParams.set(name, value);
			return newParams;
		});
	}

	const textFieldSx = {
		color: "black",
		"& .MuiInputLabel-root": {
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
		console.log(searchParams);
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
				margin: "0 auto",
			}}
		>
			<TextField
				required
				sx={textFieldSx}
				name="location"
				value={search.location}
				label={"Location"}
				onChange={handleChange}
			/>
			<TextField
				required
				sx={textFieldSx}
				type="date"
				name="date_from"
				value={search.date_from}
				onChange={handleChange}
			/>
			<TextField
				required
				sx={textFieldSx}
				type="date"
				name="date_to"
				value={search.date_to}
				onChange={handleChange}
			/>
			<TextField
				sx={{
					...textFieldSx,
					width: "70px",
				}}
				type="number"
				name="guests"
				label="Guests"
				value={search.guests}
				onChange={handleChange}
			/>
			<Button variant="contained" onClick={handleSearch}>
				<SearchIcon />
			</Button>
		</Box>
	);
}
