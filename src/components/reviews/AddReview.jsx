import {
	Avatar,
	Box,
	Button,
	TextField,
	Typography,
	useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { useCurrentUser } from "../../providers/UserProvider";
import useUsers from "../../hooks/useUsers";
import useApartments from "../../hooks/useApartments";

export default function AddReview({ apartmentId, setReviews }) {
	const { palette } = useTheme();
	const [value, setValue] = useState(0);
	const [review, setReview] = useState({});
	const [error, setError] = useState("");
	const { user } = useCurrentUser();
	const { getUserById, isLoading, userData } = useUsers();
	const { handleAddReview } = useApartments();

	useEffect(() => {
		getUserById(user._id);
	}, [user]);

	useEffect(() => {
		if (!userData) return;
		setReview({
			userId: {
				_id: user._id,
				name: userData.name,
				image: userData.image,
			},
			text: "",
			rating: value,
		});
	}, [userData, user]);

	function handleChange(e) {
		const { name, value, type } = e.target;
		if (type == "text" && value.length < 2) {
			setError("Review must be at least 2 characters long");
		} else if (type == "text") {
			setError(null);
		}
		setReview((prev) => ({
			...prev,
			[name]: value,
		}));
	}

	async function handleSubmit() {
		setReviews(await handleAddReview(apartmentId, review));
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
					border: `1px solid ${palette.primary.main}`,
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
						helperText={error}
						error={Boolean(error)}
						sx={{ width: "100%" }}
					/>
				</Box>
				<Button
					disabled={Boolean(error) || error == ""}
					onClick={handleSubmit}
				>
					<SendIcon />
				</Button>
			</Box>
		</Box>
	);
}
