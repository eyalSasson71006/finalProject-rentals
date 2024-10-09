import { Box, Typography, useTheme } from "@mui/material";
import React, { useEffect } from "react";
import useUsers from "../../hooks/useUsers";
import { titleCase } from "../../helpers/helperFunctions";
import { useCurrentUser } from "../../providers/UserProvider";

export default function ChatUserComponent({ chat }) {
	const { getUserById, userData } = useUsers();
	const { palette } = useTheme();
	const { user } = useCurrentUser();

	useEffect(() => {
		let id = chat.participants.find(
			(participant) => participant !== user._id
		);
		getUserById(id);
	}, [chat]);

	if (!userData) return null;
	return (
		<Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
			<img
				src={userData.image.src}
				alt={userData.image.alt}
				style={{ width: "50px", height: "50px", borderRadius: "50%" }}
			/>
			<Typography variant="h5">
				{titleCase(userData.name.first)} {titleCase(userData.name.last)}
			</Typography>
			{chat.unreadCount > 0 && (
				<Typography
					sx={{
						ml: "auto",
						backgroundColor: palette.primary.main,
						borderRadius: "50%",
						width: "30px",
						height: "30px",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						color: "white",
						fontWeight: "bold",
					}}
				>
					{chat.unreadCount}
				</Typography>
			)}
		</Box>
	);
}
