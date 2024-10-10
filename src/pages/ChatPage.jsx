import { Box } from "@mui/material";
import React, { useEffect } from "react";
import ChatComponent from "../components/chat/ChatComponent";
import { useCurrentUser } from "../providers/UserProvider";
import { Navigate } from "react-router-dom";
import ROUTES from "../routes/routesModel";
import { useChatProvider } from "../providers/ChatProvider";

export default function ChatPage() {
	const { user } = useCurrentUser();
	const { setCurrentChat } = useChatProvider();

	useEffect(() => {
		return () => {
			setCurrentChat(null);
		};
	}, []);
	if (!user) return <Navigate to={ROUTES.ROOT} replace />;
	return (
		<Box>
			<ChatComponent />
		</Box>
	);
}
