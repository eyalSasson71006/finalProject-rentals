import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import StarIcon from "@mui/icons-material/Star";
import { Box, IconButton, Typography } from "@mui/material";

export default function CardHeaderComponent() {
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
				<FavoriteBorderIcon fontSize="large" />
			</IconButton>
		</Box>
	);
}
