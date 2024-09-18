import React from "react";
import { Box } from "@mui/material";
import Logged from "./Logged";
import NotLogged from "./NotLogged";
import DarkModeSwitch from "./DarkModeSwitch";
import { useCurrentUser } from "../../../providers/UserProvider";

export default function RightNavbar() {
	const { user } = useCurrentUser();
	return (
		<Box sx={{ display: "flex", alignItems: "center" }}>
			<DarkModeSwitch/>
			{user ? <Logged /> : <NotLogged />}
		</Box>
	);
}
