import { Box, List, ListItem, Typography } from "@mui/material";
import React from "react";
import ChatUserComponent from "../ChatUserComponent";

export default function DesktopUsersComponent({
	chats,
	markMessagesAsRead,
	currentChat,
}) {
	return (
		<Box
			display={{ xs: "none", md: "block" }}
			width="30%"
			borderRight="1px solid #ccc"
			p={2}
		>
			<Typography variant="h6">Chats</Typography>
			<List>
				{chats.map((chat) => (
					<ChatUserComponent
						key={chat._id}
						chat={chat}
						currentChat={currentChat}
						markMessagesAsRead={markMessagesAsRead}
					/>
				))}
			</List>
		</Box>
	);
}
