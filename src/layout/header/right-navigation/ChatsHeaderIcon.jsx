import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import ROUTES from "../../../routes/routesModel";
import EmailIcon from "@mui/icons-material/Email";
import { useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { useChatProvider } from "../../../providers/ChatProvider";

export default function ChatsHeaderIcon() {
	const navigate = useNavigate();
    const {chats} = useChatProvider()
    const [unread, setUnread] = useState(0);
    
    useEffect(() => {
        let sum = 0;
        chats.forEach((chat) => {
            sum += chat.unreadCount || 0;
        })
        setUnread(sum);
    }, [chats]);

	return (
		<IconButton onClick={() => navigate(ROUTES.CHAT)}>
			<Badge badgeContent={unread} color="success">
				<EmailIcon />
			</Badge>
		</IconButton>
	);
}
