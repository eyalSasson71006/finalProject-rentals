import { InputAdornment, OutlinedInput } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

export default function CrmSearchBar({ setSearch }) {
	const handleSearch = (e) => {
		setSearch((e.target.value).trim());
	};
	return (
		<OutlinedInput
			sx={{
				mb: 3,
				borderRadius: "5px",

			}}
			placeholder="User name..."
			onChange={handleSearch}
			endAdornment={
				<InputAdornment position="end">
					<SearchIcon />
				</InputAdornment>
			}
		></OutlinedInput>
	);
}
