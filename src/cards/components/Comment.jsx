import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";

export default function Comment({ reviewObj }) {
	return (
		<Box
			sx={{
				borderRadius: "12px",
				border: "1px solid #708871",
				width: "100%",
				padding: "10px",
				my: 1,
				display: "flex",
				gap: 2,
			}}
		>
			<Avatar alt="avatar" src={reviewObj.img} />
			<Box>
				<Box sx={{ display: "flex" }}>
					<Typography fontWeight={"bold"} mr={1}>
						{reviewObj.username}
					</Typography>
					<Typography>{reviewObj.rating}</Typography>
					<StarIcon sx={{width:"15px"}} />
				</Box>
				<Typography>{reviewObj.text}</Typography>
			</Box>
		</Box>
	);
}
