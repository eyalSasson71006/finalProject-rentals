import { AppBar, Box, Toolbar } from "@mui/material";
import React from "react";
import RightNavbar from "./right-navigation/RightNavbar";
import LogoIcon from "./left-navigation/LogoIcon";

export default function Header() {
	return (
		<AppBar position="sticky" color="primary" elevation={10}>
			<Toolbar sx={{ justifyContent: "space-between" }}>
				<Box>
					<LogoIcon />
				</Box>
				<RightNavbar />
			</Toolbar>
		</AppBar>
	);
}
