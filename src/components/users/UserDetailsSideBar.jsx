import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { handleBrokenUserImg } from "../../helpers/brokenImages";
import { titleCase } from "../../helpers/helperFunctions";
import { useCurrentUser } from "../../providers/UserProvider";
import ROUTES from "../../routes/routesModel";
import { Link, useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import { useChatProvider } from "../../providers/ChatProvider";

export default function UserDetailsSideBar({ userData }) {
	const { user } = useCurrentUser();
	const { createChat } = useChatProvider();
	const navigate = useNavigate();
    
	if (!userData) return null;
	return (
		<Box sx={{ position: "sticky", top: "100px" }}>
			<img
				src={userData.image.src}
				alt={userData.image.alt}
				onError={handleBrokenUserImg}
				style={{ width: "200px", borderRadius: "50px" }}
			/>
			<Link
				style={{ textDecoration: "none", color: "inherit" }}
				to={ROUTES.USER_PROFILE + "/" + userData?._id}
			>
				<Typography variant="h5" textAlign={"center"}>
					{`${titleCase(userData.name.first)} ${titleCase(
						userData.name.last
					)}`}
				</Typography>
			</Link>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					gap: "4px",
				}}
			>
				<Typography variant="h6">Rating: </Typography>
				<Typography variant="h5">
					{userData.rating.toFixed(1)}
				</Typography>
				<StarIcon />
			</Box>
			{user && user._id !== userData?._id && (
				<Button
					onClick={() => {
						createChat(userData._id);
						navigate(ROUTES.CHAT);
					}}
					variant="contained"
					sx={{ width: "100%", my: 2, fontSize: 22 }}
				>
					Message
				</Button>
			)}
		</Box>
	);
}
