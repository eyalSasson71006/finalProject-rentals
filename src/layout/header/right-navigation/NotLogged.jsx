import React from "react";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
export default function NotLogged() {
	const linkStyle = {
		textDecoration: "none",
		color: "black",
		fontSize: " 1.3rem",
	};
	return (
		<Box sx={{ display: "flex", gap: "10px" }}>
			<Button variant="contained">
				<Link style={linkStyle} to={ROUTES.SIGNUP}>
					SignUp
				</Link>
			</Button>
			<Button variant="contained">
				<Link style={linkStyle} to={ROUTES.LOGIN}>
					Login
				</Link>
			</Button>
		</Box>
	);
}
