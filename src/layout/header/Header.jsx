import { AppBar, Box, Toolbar } from "@mui/material";
import React from "react";
import RightNavbar from "./right-navigation/RightNavbar";
import MobileNavBar from "./left-navigation/MobileNavBar";
import LogoIcon from "./left-navigation/logo/LogoIcon";

export default function Header() {
	return (
		<AppBar position="sticky" color="primary" elevation={10}>
			<Toolbar sx={{ justifyContent: "space-between" }}>
				<Box sx={{ display: { md: "inline-flex", xs: "none" } }}>
					<LogoIcon />
				</Box>
				<MobileNavBar
					sx={{ display: { md: "none", xs: "inline-flex" } }}
				/>
				<RightNavbar />
			</Toolbar>
		</AppBar>
	);
}
