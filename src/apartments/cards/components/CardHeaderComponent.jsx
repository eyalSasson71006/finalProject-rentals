import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, IconButton } from "@mui/material";

export default function CardHeaderComponent({ apartment }) {
	return (
		<Box sx={{ padding: "15px 20px" }}>
			<IconButton
				sx={{
					color: "white",
					borderRadius: "15px",
					width: "45px",
					height: "45px",
					"&:hover": {
						backgroundColor: "#b0b0b08c",
					},
				}}
			>
				{apartment.favorite ? (
					<FavoriteIcon fontSize="large" sx={{color:"red"}} />
				) : (
					<FavoriteBorderIcon fontSize="large" />
				)}
			</IconButton>
		</Box>
	);
}
