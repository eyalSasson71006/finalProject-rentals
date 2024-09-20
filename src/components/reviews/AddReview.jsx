import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { useCurrentUser } from "../../providers/UserProvider";
import useUsers from "../../hooks/useUsers";
import useApartments from "../../hooks/useApartments";

export default function AddReview({ apartmentId }) {
	const [value, setValue] = useState(0);
	const [review, setReview] = useState({});
	const { user } = useCurrentUser();
	const { getUserById, isLoading, userData } = useUsers();
	const { handleAddReview } = useApartments();

	useEffect(() => {
		getUserById(user._id);
	}, [user]);

	useEffect(() => {
		if (!userData) return;
		setReview({
			username: userData.name.first + " " + userData.name.last,
			image: {
				src: userData.image.src,
				alt: userData.image.alt,
			},
			text: "",
			rating: value,
		});
	}, [userData]);

	function handleChange(e) {
		setReview((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	}

	function handleSubmit() {
		handleAddReview(apartmentId, review);
		setReview((prev) => ({
			...prev,
			text: "",
			rating: 0,
		}));
		setValue(0);
	}

	if (isLoading) return <Box></Box>;

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
				<Avatar alt={userData.image.alt} src={userData.image.src} />
				<Box sx={{ width: "80%" }}>
					<Box sx={{ display: "flex" }}>
						<Typography fontWeight={"bold"} mr={1}>
							{userData.name.first} {userData.name.last}
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
						value={review.text || ""}
						name="text"
						sx={{ width: "100%" }}
					/>
				</Box>
				<Button onClick={handleSubmit}>
					<SendIcon />
				</Button>
			</Box>
		</Box>
	);
}
