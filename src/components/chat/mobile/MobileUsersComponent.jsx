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
	const { palette } = useTheme();
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
								onClick={() => {
									markMessagesAsRead(chat._id);
									setToggle((p) => !p);
								}}
							>
								<ChatUserComponent key={chat._id} chat={chat} />
							</ListItem>
						))}
					</List>
				</Box>
			)}
		</>
	);
}
