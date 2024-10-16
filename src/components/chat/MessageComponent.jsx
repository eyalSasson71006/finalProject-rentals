import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

export default function MessageComponent({ message, userId }) {
	const { palette } = useTheme();
	const convertTimeStamp = (timestamp) => {
		const date = new Date(timestamp);
		return (
			date.getHours().toString().padStart(2, "0") +
			":" +
			date.getMinutes().toString().padStart(2, "0")
		);
	};
	const isSender = userId == message.sender;

	return (
		<Box
			sx={{
				width: "fit-content",
				my: 1,
				backgroundColor: isSender ? palette.primary.main : "#ccc",
				borderRadius: "10px",
				padding: "10px 15px",
				maxWidth: "80%",
				minWidth: "80px",
				minHeight: "60px",
				wordWrap: "break-word",
				position: "relative",
				boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
				alignSelf: isSender ? "flex-end" : "flex-start",
			}}
		>
			<Typography
				sx={{
					fontSize: "15px",
					lineHeight: "1.5",
					color: isSender ? "#fff" : "#333",
				}}
			>
				{message.content}
			</Typography>
			<Typography
				sx={{
					fontSize: "12px",
					color: isSender ? "#ccc" : "#777",
					position: "absolute",
					bottom: "5px",
					right: "10px",
				}}
			>
				{convertTimeStamp(message.timestamp)}
			</Typography>
		</Box>
	);
}
