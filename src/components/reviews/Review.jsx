import { Avatar, Box, Typography, useTheme } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";

export default function Review({ reviewObj }) {
	const { palette } = useTheme();		
	return (
		<Box
			sx={{
				borderRadius: "12px",
				border: `1px solid ${palette.primary.main}`,
				width: "100%",
				padding: "10px",
				my: 1,
				display: "flex",
				gap: 2,
			}}
		>
			<Avatar alt={"profile picture"} src={reviewObj?.userId.image.src} />
			<Box>
				<Box sx={{ display: "flex" }}>
					<Typography fontWeight={"bold"} mr={1}>
						{reviewObj?.userId.name.first}{" "}
						{reviewObj?.userId.name.last}
					</Typography>
					<Typography>{reviewObj?.rating}</Typography>
					<StarIcon sx={{ width: "15px" }} />
				</Box>
				<Typography>{reviewObj?.text}</Typography>
			</Box>
		</Box>
	);
}
