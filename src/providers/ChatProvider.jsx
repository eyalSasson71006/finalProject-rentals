import React, { createContext, useContext, useEffect, useState } from "react";
import socket from "../chat/socket";
import { getChatById } from "../chat/services/chatsApiService";
import { useCurrentUser } from "./UserProvider";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
	const { user } = useCurrentUser();
	const [chats, setChats] = useState([]);
	const [currentChat, setCurrentChat] = useState(null);
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		socket.on("chatsList", (chatsList) => {
			setChats(chatsList);
		});

		socket.on("receiveMessage", ({ chatId, message }) => {
			if (currentChat == chatId && message.sender != user._id) {
				setMessages((prev) => [...prev, message]);
			}
			if (currentChat == chatId) {
				markMessagesAsRead(chatId);
			} else {
				socket.emit("getChatsWithUnreadCount");
			}
		});

		socket.on("enterChat", ({ chatId }) => {
			markMessagesAsRead(chatId);
		});

		socket.emit("getChatsWithUnreadCount");

		return () => {
			socket.off("receiveMessage");
			socket.off("enterChat");
			socket.off("chatsList");
		};
	}, [currentChat, user]);

	const createChat = (recipientId) => {
		socket.emit("createChat", { recipientId });
	};

	const sendMessage = (chatId, content) => {
		socket.emit("sendMessage", { chatId, content });
		setMessages((prev) => [
			...prev,
			{ sender: user._id , content, timestamp: new Date() },
		]);
	};

	const markMessagesAsRead = async (chatId) => {
		socket.emit("markMessagesAsRead", chatId);
		let data = await getChatById(chatId);
		setMessages(await data.messages);
		setCurrentChat(chatId);
	};

	return (
		<ChatContext.Provider
			value={{
				chats,
				setChats,
				currentChat,
				setCurrentChat,
				setMessages,
				messages,
				createChat,
				sendMessage,
				markMessagesAsRead,
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
