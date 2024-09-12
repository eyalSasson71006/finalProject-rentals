import React from "react";
import { Box } from "@mui/material";
import Logged from "./Logged";
import NotLogged from "./NotLogged";
import DarkModeSwitch from "./DarkModeSwitch";

export default function RightNavbar() {

	return (
		<Box sx={{ display: "flex", alignItems: "center" }}>
			<DarkModeSwitch/>
			{/* {user ? <Logged /> : <NotLogged />} */}
			<NotLogged/>
			{/* <Logged /> */}
		</Box>
	);
}
