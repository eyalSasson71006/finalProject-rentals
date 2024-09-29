import React, { useState } from "react";
import {
	Box,
	TextField,
	Button,
	List,
	ListItem,
	Typography,
} from "@mui/material";
import { useChatProvider } from "../../providers/ChatProvider";

const ChatComponent = () => {
	const {
		chats,
		currentChat,
		messages,
		sendMessage,
		selectChat,
		createChat,
	} = useChatProvider();
	const [newMessage, setNewMessage] = useState("");

	const handleSend = () => {
		if (newMessage.trim() !== "") {
			sendMessage(currentChat, newMessage);
			setNewMessage("");
		}
	};

	return (
		<Box display="flex">
			{/* Chat List */}
			<Box width="30%" borderRight="1px solid #ccc" p={2}>
				<Typography variant="h6">Chats</Typography>
				<List>
					{chats.map((chat) => (
						<ListItem
							button
							key={chat._id}
							selected={chat._id === currentChat}
							onClick={() => selectChat(chat._id)}
						>
							{/* Display participant name */}
							{/* Assuming you have a way to get participant info */}
							<Typography>
								{chat.participants
									.filter((id) => id !== "currentUserId")
									.join(", ")}
							</Typography>
						</ListItem>
					))}
				</List>
				{/* Add functionality to create new chat */}
			</Box>

			{/* Chat Window */}
			<Box width="70%" p={2}>
				{currentChat ? (
					<>
						<List>
							{messages.map((msg, index) => (
								<ListItem key={index}>
									<Typography
										align={
											msg.sender === "You"
												? "right"
												: "left"
										}
										variant="body1"
									>
										<strong>
											{msg.sender === "You"
												? "You"
												: msg.sender.username}
											:
										</strong>{" "}
										{msg.content}
									</Typography>
								</ListItem>
							))}
						</List>
						<Box display="flex" mt={2}>
							<TextField
								fullWidth
								variant="outlined"
								placeholder="Type a message..."
								value={newMessage}
								onChange={(e) => setNewMessage(e.target.value)}
								onKeyPress={(e) => {
									if (e.key === "Enter") handleSend();
								}}
							/>
							<Button
								variant="contained"
								color="primary"
								onClick={handleSend}
							>
								Send
							</Button>
						</Box>
					</>
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
