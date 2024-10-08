import React from "react";
import { Box, IconButton } from "@mui/material";
import Logged from "./Logged";
import NotLogged from "./NotLogged";
import DarkModeSwitch from "./DarkModeSwitch";
import { useCurrentUser } from "../../../providers/UserProvider";
import ChatsHeaderIcon from "./ChatsHeaderIcon";

export default function RightNavbar() {
	const { user } = useCurrentUser();
	return (
		<Box sx={{ display: "flex", alignItems: "center" }}>
			<DarkModeSwitch />
			{user && (
				<ChatsHeaderIcon/>
			)}
			{user ? <Logged /> : <NotLogged />}
		</Box>
	);
}
