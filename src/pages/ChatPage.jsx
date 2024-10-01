import { Box } from "@mui/material";
import React from "react";
import ChatComponent from "../components/chat/ChatComponent";
import { useCurrentUser } from "../providers/UserProvider";
import { Navigate } from "react-router-dom";
import ROUTES from "../routes/routesModel";

export default function ChatPage() {
	const {user} = useCurrentUser();

	if (!user) return <Navigate to={ROUTES.ROOT} replace />;
	return (
		<Box>
			<ChatComponent />
		</Box>
	);
}
