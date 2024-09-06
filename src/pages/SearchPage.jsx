import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchPage() {
	const [search, setSearch] = useState({
		location: "",
		date_from: "",
		date_to: "",
		guests: 1,
	});

	function handleChange(e) {
		if (e.target.type == "number") {
			setSearch((prev) => ({
				...prev,
				[e.target.name]: Number(e.target.value),
			}));
		} else {
			setSearch((prev) => ({ ...prev, [e.target.name]: e.target.value }));
		}
	}

	console.log(search);

	return (
		<>
			<Box
				sx={{ 
					backgroundImage: "url('/images/searchBackground1.jpg')",
					backgroundSize:"cover",
					backgroundRepeat:"no-repeat",
					backgroundPosition:"center",
					height:"100vh",
					overflow:"hidden",
					display:"flex",
					alignItems:"center"
				}}
			>
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
						sx={{ backgroundColor: "white", borderRadius: "5px" }}
						name="location"
						value={search.location}
						label={"Location"}
						onChange={handleChange}
					/>
					<TextField
						required
						sx={{ backgroundColor: "white", borderRadius: "5px" }}
						type="date"
						name="date_from"
						value={search.date_from}
						onChange={handleChange}
					/>
					<TextField
						required
						sx={{ backgroundColor: "white", borderRadius: "5px" }}
						type="date"
						name="date_to"
						value={search.date_to}
						onChange={handleChange}
					/>
					<TextField
						sx={{
							backgroundColor: "white",
							borderRadius: "5px",
							width: "70px",
						}}
						type="number"
						name="guests"
						label="Guests"
						value={search.guests}
						onChange={handleChange}
					/>
					<Button variant="contained">
						<SearchIcon />
					</Button>
				</Box>
			</Box>
		</>
	);
}
