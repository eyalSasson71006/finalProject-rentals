import React, { useEffect, useState } from "react";
import { getChatById } from "../../chat/services/chatsApiService";
import { useCurrentUser } from "../../providers/UserProvider";
import useUsers from "../../hooks/useUsers";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { titleCase } from "../../helpers/helperFunctions";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function ChatHeader({ currentChat, setToggle }) {
	const [chat, setChat] = useState(null);
	const { user } = useCurrentUser();
	const { getUserById, userData } = useUsers();
	const { palette } = useTheme();

	useEffect(() => {
		const getData = async () => {
			let data = await getChatById(currentChat);
			data = await data.participants.find((p) => p != user._id);
			setChat(data);
		};
		if (currentChat) getData();
	}, [currentChat]);

	useEffect(() => {
		const getData = async () => {
			await getUserById(chat);
		};
		if (chat) getData();
	}, [chat]);

	if (!userData) return null;
	return (
		<Box
			sx={{
				backgroundColor: palette.primary.main,
				padding: "10px 20px",
				display: "flex",
				alignItems: "center",
				gap: "10px",
				borderRadius: "15px",
				mb: 2,
			}}
		>
			<IconButton
				onClick={() => setToggle(false)}
				sx={{ display: { xs: "block", md: "none" } }}
			>
				<ArrowBackIosIcon />
			</IconButton>
			<img
				src={userData.image.src}
				alt={userData.image.alt}
				style={{ width: "50px", height: "50px", borderRadius: "50%" }}
			/>
			<Typography fontSize={{ xs: "1.3rem", md: "1.8rem" }}>
				{titleCase(userData.name.first)} {titleCase(userData.name.last)}
			</Typography>
		</Box>
	);
}
