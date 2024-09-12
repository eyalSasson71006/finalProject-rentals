import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import user from "../../models/user";
import SendIcon from "@mui/icons-material/Send";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export default function AddReview() {
	const [value, setValue] = useState(0);
	const [review, setReview] = useState({
		username: user.name.first + user.name.last,
		img: user.img.src,
		text: "",
		rating: value,
	});

	function handleChange(e) {
		setReview((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	}

	return (
		<Box>
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
				<Avatar alt="avatar" src="/images/avatar.png" />
				<Box sx={{ width: "80%" }}>
					<Box sx={{ display: "flex" }}>
						<Typography fontWeight={"bold"} mr={1}>
							{user.name.first} {user.name.last}
						</Typography>
						<Stack spacing={1}>
							<Rating
								name="rating"
								value={value}
								precision={0.5}
								onChange={(e, newValue) => {
									setValue(newValue);
									handleChange(e);
								}}
							/>
						</Stack>
					</Box>
					<TextField
						onChange={handleChange}
						variant="standard"
						name="text"
						sx={{ width: "100%" }}
					/>
				</Box>
				<Button onClick={() => console.log(review)}>
					<SendIcon />
				</Button>
			</Box>
		</Box>
	);
}
