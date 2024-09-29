import React, { createContext, useContext, useEffect, useState } from "react";
import socket from "../chat/socket";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
	const [chats, setChats] = useState([]);
	const [currentChat, setCurrentChat] = useState(null);
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		// Listen for incoming messages
		socket.on("receiveMessage", ({ chatId, message }) => {
			if (currentChat === chatId) {
				setMessages((prev) => [...prev, message]);
			}
			// Optionally update chat list
		});

		// Listen for new chats
		socket.on("newChat", ({ chatId }) => {
			setChats((prev) => [...prev, { _id: chatId, participants: [] }]);
		});

		// Cleanup on unmount
		return () => {
			socket.off("receiveMessage");
			socket.off("newChat");
		};
	}, [currentChat]);

	const createChat = (recipientId) => {
		socket.emit("createChat", { recipientId });
	};

	const sendMessage = (chatId, content) => {
		socket.emit("sendMessage", { chatId, content });
		setMessages((prev) => [
			...prev,
			{ sender: "You", content, timestamp: new Date() },
		]);
	};

	const selectChat = async (chatId) => {
		setCurrentChat(chatId);
		// Fetch chat history from the backend
		const response = await fetch(`/api/chats/${chatId}`, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		});
		const data = await response.json();
		setMessages(data.messages);
	};

	return (
		<ChatContext.Provider
			value={{
				chats,
				currentChat,
				messages,
				createChat,
				sendMessage,
				selectChat,
			}}
		>
			{children}
		</ChatContext.Provider>
	);
};

export const useChatProvider = () => {
	const context = useContext(ChatContext);
	if (!context)
		throw Error("useChatProvider must be used within a NameProvider");
	return context;
};
