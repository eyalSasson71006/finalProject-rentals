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
import ROUTES from "../routes/routesModel";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function SearchBar() {
	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();
	const [search, setSearch] = useState({
		location: searchParams.get("location") || "",
		propertyType: searchParams.get("propertyType") || "",
		bedrooms: searchParams.get("bedrooms") || 1,
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
				backgroundColor:"white"
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
			<FormControl
				sx={{
					...textFieldSx,
					minWidth: "150px",
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
					{["apartment", "house", "penthouse", "studio"].map(
						(item, index) => (
							<MenuItem key={item + index} value={item}>
								{item}
							</MenuItem>
						)
					)}
				</Select>
			</FormControl>

			<TextField
				sx={{
					...textFieldSx,
					width: "90px",
				}}
				type="number"
				name="bedrooms"
				label="Bedrooms"
				value={search.bedrooms}
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
