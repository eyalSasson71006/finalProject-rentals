import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, IconButton } from "@mui/material";
import { useCurrentUser } from "../../../providers/UserProvider";
import useApartments from "../../../hooks/useApartments";

export default function CardHeaderComponent({ apartment }) {
	const { user } = useCurrentUser();
	const { handleLike } = useApartments();
	const [liked, setLiked] = useState(user && apartment.likes.includes(user._id));

	async function handleLikeClick() {
		setLiked(await handleLike(apartment._id));
	}
	return (
		<Box sx={{ padding: "15px 20px" }}>
			<IconButton
				onClick={handleLikeClick}
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
				{liked ? (
					<FavoriteIcon fontSize="large" sx={{ color: "red" }} />
				) : (
					<FavoriteBorderIcon fontSize="large" />
				)}
			</IconButton>
		</Box>
	);
}
