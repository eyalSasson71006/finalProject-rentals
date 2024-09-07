import React from "react";

import SetDarkMode from "./SetDarkMode";
import { Box } from "@mui/material";
import Logged from "./Logged";
import NotLogged from "./NotLogged";

export default function RightNavbar() {

	return (
		<Box sx={{ display: "flex", alignItems: "center" }}>
			{/* <SetDarkMode /> */}
			{/* {user ? <Logged /> : <NotLogged />} */}
			{/* <NotLogged/> */}
			<Logged/>
		</Box>
	);
}
