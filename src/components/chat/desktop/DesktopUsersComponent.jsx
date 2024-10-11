import { Box, List, ListItem, Typography, useTheme } from "@mui/material";
import React from "react";
import ChatUserComponent from "../ChatUserComponent";

export default function DesktopUsersComponent({ chats, markMessagesAsRead, currentChat }) {
    const { palette } = useTheme();
	return (
		<Box display={{ xs: "none", md: "block" }} width="30%" borderRight="1px solid #ccc" p={2}>
			<Typography variant="h6">Chats</Typography>
			<List>
				{chats.map((chat) => (
					<ListItem
						component={"button"}
						key={chat._id}
						sx={{
							backgroundColor:
								chat._id === currentChat
									? palette.primary.main
									: "#ddd",
							my: 1,
							borderRadius: "15px",
							border: "none",
							display: "block",
						}}
						onClick={() => markMessagesAsRead(chat._id)}
					>
						<ChatUserComponent key={chat._id} chat={chat} />
					</ListItem>
				))}
			</List>
		</Box>
	);
}
