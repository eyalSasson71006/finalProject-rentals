import React from "react";
import StarIcon from "@mui/icons-material/Star";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, Typography } from "@mui/material";

export default function CardFooterComponent({ apartment }) {
	return (
		<Box
			sx={{
				width: "inherit",
				padding: "15px 20px",
				display: "flex",
				position: "absolute",
				bottom: "15px",
				justifyContent: "space-between",
				boxSizing: "border-box",
				alignItems: "end",
			}}
		>
			<Box sx={{ color: "white" }}>
				<Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
					<LocationOnIcon sx={{ width: "0.9rem" }} />
					<Typography sx={{ fontSize: "0.8rem" }}>
						{apartment.location}
					</Typography>
				</Box>
				<Typography>{apartment.title}</Typography>
			</Box>
			<Box
				sx={{
					backgroundColor: "#0000006a",
					padding: "5px 10px",
					borderRadius: "10px",
					display: "flex",
					gap: "5px",
				}}
			>
				<StarIcon sx={{ color: "white", width: "20px" }} />
				<Typography sx={{ color: "white", fontSize: "1.1rem" }}>
					{apartment.rating}
				</Typography>
			</Box>
		</Box>
	);
}
