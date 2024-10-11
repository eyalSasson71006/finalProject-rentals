import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useCurrentUser } from "../../../providers/UserProvider";
import MessageComponent from "../MessageComponent";
import ChatHeader from "../ChatHeader";

export default function DesktopChatComponent({
	currentChat,
	messages,
	sendMessage,
}) {
	const inputRef = useRef(null);
	const chatBoxRef = useRef(null);
	const [newMessage, setNewMessage] = useState("");
	const { user } = useCurrentUser();

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

	return (
		<Box sx={{ display: { xs: "none", md: "block" }, width: "70%", p: 2 }}>
			{currentChat ? (
				<Box>
					<ChatHeader currentChat={currentChat} />
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
	);
}
