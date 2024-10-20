import React from "react";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, Typography } from "@mui/material";
import { titleCase } from "../../../helpers/helperFunctions";

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
				alignItems: "center",
			}}
		>
			<Box sx={{ color: "white" }}>
				<Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
					<LocationOnIcon sx={{ width: "0.9rem" }} />
					<Typography
						sx={{
							display: "-webkit-box",
							WebkitBoxOrient: "vertical",
							overflow: "hidden",
							textOverflow: "ellipsis",
							WebkitLineClamp: 1,
							fontSize: "0.8rem",
						}}
					>
						{titleCase(apartment.address.city)},{" "}
						{titleCase(apartment.address.country)}
					</Typography>
				</Box>
				<Typography
					sx={{
						display: "-webkit-box",
						WebkitBoxOrient: "vertical",
						overflow: "hidden",
						textOverflow: "ellipsis",
						WebkitLineClamp: 2,
					}}
				>
					{titleCase(apartment.title)}
				</Typography>
			</Box>
			<Box>
				<Typography
					color="white"
					fontSize={"0.7rem"}
					textAlign={"center"}
				>
					${apartment.price} night
				</Typography>
				<Box
					sx={{
						backgroundColor: "#0000006a",
						padding: "2px 10px",
						borderRadius: "10px",
						display: "flex",
						gap: "5px",
					}}
				>
					<StarIcon sx={{ color: "white", width: "20px" }} />
					<Typography sx={{ color: "white", fontSize: "1.1rem" }}>
						{apartment.rating.toFixed(1)}
					</Typography>
				</Box>
			</Box>
		</Box>
	);
}
