import React, { useEffect, useRef, useState } from "react";
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
import useChats from "../../hooks/useChats";

const ChatComponent = () => {
	const { chats, currentChat, messages, sendMessage, selectChat } =
		useChatProvider();
	const inputRef = useRef(null);
	const chatBoxRef = useRef(null);
	const { handleGetMyChats } = useChats();
	const { user } = useCurrentUser();
	const [newMessage, setNewMessage] = useState("");
	const { palette } = useTheme();
	const handleSend = () => {
		if (newMessage.trim() !== "") {
			sendMessage(currentChat, newMessage);
			setNewMessage("");
		}
		if (inputRef.current) inputRef.current.focus();
	};

	useEffect(() => {
		if (chatBoxRef.current)
			chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
	}, [messages]);

	useEffect(() => {
		handleGetMyChats();
	}, []);

	useEffect(() => {
		if (currentChat) selectChat(currentChat);
	}, [chats]);

	return (
		<Box sx={{ display: "flex", mt: 3 }}>
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
						<Box
							ref={chatBoxRef}
							sx={{
								overflow: "auto",
								height: "50vh",
								display: "flex",
								flexDirection: "column",
							}}
						>
							{messages.map((msg, index) => (
								<MessageComponent
									message={msg}
									userId={user._id}
									key={index}
								/>
							))}
						</Box>
						<Box display="flex" mt={2}>
							<TextField
								autoFocus
								inputRef={inputRef}
								fullWidth
								variant="outlined"
								placeholder="Type a message..."
								value={newMessage}
								onChange={(e) => setNewMessage(e.target.value)}
								onKeyDown={(e) => {
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
