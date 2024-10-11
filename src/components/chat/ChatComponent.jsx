import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useChatProvider } from "../../providers/ChatProvider";
import DesktopUsersComponent from "./desktop/DesktopUsersComponent";
import MobileUsersComponent from "./mobile/MobileUsersComponent";
import DesktopChatComponent from "./desktop/DesktopChatComponent";
import MobileChatComponent from "./mobile/MobileChatComponent";

const ChatComponent = () => {
	const { chats, currentChat, messages, sendMessage, markMessagesAsRead } =
		useChatProvider();
	const [toggle, setToggle] = useState(false);

	useEffect(() => {
		if (currentChat) markMessagesAsRead(currentChat);
	}, [chats]);

	return (
		<Box sx={{ display: "flex", mt: 1 }}>
			<DesktopUsersComponent
				chats={chats}
				markMessagesAsRead={markMessagesAsRead}
				currentChat={currentChat}
			/>
			<MobileUsersComponent
				setToggle={setToggle}
				toggle={toggle}
				chats={chats}
				markMessagesAsRead={markMessagesAsRead}
				currentChat={currentChat}
			/>

			<DesktopChatComponent
				currentChat={currentChat}
				messages={messages}
				sendMessage={sendMessage}
			/>
			<MobileChatComponent
				setToggle={setToggle}
				toggle={toggle}
				currentChat={currentChat}
				messages={messages}
				sendMessage={sendMessage}
			/>
		</Box>
	);
};

export default ChatComponent;
