import { Box, List, ListItem, Typography, useTheme } from "@mui/material";
import React from "react";
import ChatUserComponent from "../ChatUserComponent";

export default function MobileUsersComponent({
	chats,
	markMessagesAsRead,
	currentChat,
	toggle,
	setToggle,
}) {
	return (
		<>
			{!toggle && (
				<Box
					display={{ xs: "block", md: "none" }}
					width="90%"
					m={"0 auto"}
					p={2}
				>
					<Typography variant="h6">Chats</Typography>
					<List>
						{chats.map((chat) => (
							<ChatUserComponent
								setToggle={setToggle}
								key={chat._id}
								chat={chat}
								currentChat={currentChat}
								markMessagesAsRead={markMessagesAsRead}
							/>
						))}
					</List>
				</Box>
			)}
		</>
	);
}
