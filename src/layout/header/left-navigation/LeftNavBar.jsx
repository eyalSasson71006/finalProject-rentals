import { Box } from "@mui/material";
import React from "react";
import LogoIcon from "./logo/LogoIcon";
import { Link } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";

const linkStyle = {
	textDecoration: "none",
	color: "black",
	fontSize: " 1.1rem",
};

export default function LeftNavBar({ sx }) {
	return (
		<Box sx={{ display: "flex", alignItems: "center", gap: "20px", ...sx }}>
			<LogoIcon />
			<Link style={linkStyle} to={ROUTES.FAV_APARTMENTS}>
				FAV APARTMENTS
			</Link>
			<Link style={linkStyle} to={ROUTES.MY_APARTMENTS}>
				MY APARTMENTS
			</Link>
		</Box>
	);
}
