import React from "react";
import { Box, IconButton } from "@mui/material";
import Logged from "./Logged";
import NotLogged from "./NotLogged";
import DarkModeSwitch from "./DarkModeSwitch";
import { useCurrentUser } from "../../../providers/UserProvider";
import EmailIcon from "@mui/icons-material/Email";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";

export default function RightNavbar() {
	const { user } = useCurrentUser();
	const navigate = useNavigate();
	return (
		<Box sx={{ display: "flex", alignItems: "center" }}>
			<DarkModeSwitch />
			{user && (
				<IconButton onClick={() => navigate(ROUTES.CHAT)}>
					<EmailIcon />
				</IconButton>
			)}
			{user ? <Logged /> : <NotLogged />}
		</Box>
	);
}
