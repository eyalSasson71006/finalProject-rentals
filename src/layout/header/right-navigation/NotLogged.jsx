import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
export default function NotLogged() {
	const linkStyle = {
		textDecoration: "none",
		color: "white",
		fontSize: " 1.1rem",
	};
	return (
		<Box sx={{ display: "flex", gap: "10px" }}>
				<Link style={linkStyle}>
					SIGN UP
				</Link>
				<Link style={linkStyle}>
					LOGIN
				</Link>
		</Box>
	);
}
