import React, { useEffect, useState } from "react";
import {
	Box,
	TextField,
	Button,
	List,
	ListItem,
	Typography,
	useTheme,
} from "@mui/material";
import { useChatProvider } from "../../providers/ChatProvider";
import { useCurrentUser } from "../../providers/UserProvider";
import ChatUserComponent from "./ChatUserComponent";
import MessageComponent from "./MessageComponent";

const ChatComponent = () => {
	const { chats, currentChat, messages, sendMessage, selectChat } =
		useChatProvider();
	const { user } = useCurrentUser();
	const [newMessage, setNewMessage] = useState("");
	const { palette } = useTheme();
	const handleSend = () => {
		if (newMessage.trim() !== "") {
			sendMessage(currentChat, newMessage);
			setNewMessage("");
		}
	};

	return (
		<Box sx={{ display: "flex" }}>
			<Box width="30%" borderRight="1px solid #ccc" p={2}>
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
							}}
							onClick={() => selectChat(chat._id)}
						>
							<Box>
								{chat.participants
									.filter((id) => id !== user._id)
									.map((id) => (
										<ChatUserComponent key={id} id={id} />
									))}
							</Box>
						</ListItem>
					))}
				</List>
			</Box>

			<Box sx={{ width: "70%", p: 2 }}>
				{currentChat ? (
					<Box>
						<Box sx={{ overflow: "auto", maxHeight: "50vh" }}>
							<List>
								{messages.map((msg, index) => (
									<ListItem key={index}>
										<MessageComponent
											message={msg}
											userId={user._id}
										/>
									</ListItem>
								))}
							</List>
						</Box>
						<Box display="flex" mt={2}>
							<TextField
								fullWidth
								variant="outlined"
								placeholder="Type a message..."
								value={newMessage}
								onChange={(e) => setNewMessage(e.target.value)}
							/>
							<Button
								variant="contained"
								color="primary"
								onClick={handleSend}
							>
								Send
							</Button>
						</Box>
					</Box>
				) : (
					<Typography variant="h6">
						Select a chat to start messaging
					</Typography>
				)}
			</Box>
		</Box>
	);
};

export default ChatComponent;
