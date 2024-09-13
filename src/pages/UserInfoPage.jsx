import { Box, Button, Grid2, Typography } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";
import PageHeadline from "../components/PageHeadline";
import StarIcon from "@mui/icons-material/Star";
import user from "../models/user";
import CardsListComponent from "../cards/CardsListComponent";
import AddReview from "../cards/components/addReview";
import Review from "../cards/components/Review";
import apartment from "../models/apartment";

export default function UserInfoPage() {
	const { id } = useParams();
	return (
		<Box>
			<Grid2
				container
				spacing={2}
				sx={{
					justifyContent: "center",
					width: "80vw",
					margin: "50px auto",
					gap: 10,
				}}
			>
				<Grid2 size={8}>
					<Box sx={{ py: 0 }}>
						<Typography
							variant="h2"
							sx={{ my: 2, textAlign: "center" }}
						>
							{user.name.first}'s Apartments
						</Typography>
						<CardsListComponent />
					</Box>
					<Typography
						variant="h3"
						mb={3}
					>{`About ${user.name.first}`}</Typography>
					<Box sx={{ maxHeight: "500px", overflowY: "auto" }}>
						<AddReview />
						{apartment.reviews.map((review) => (
							<Review key={review.id} reviewObj={review} />
						))}
					</Box>
				</Grid2>
				<Grid2 size={"auto"}>
					<Box sx={{ position: "sticky", top: "100px" }}>
						<img
							src={user.img.src}
							style={{ width: "200px", borderRadius: "50px" }}
						/>
						<Typography variant="h5">
							{`${user.name.first} ${user.name.middle} ${user.name.last}`}
						</Typography>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								gap: "4px",
							}}
						>
							<Typography variant="h6">Host rating: </Typography>
							<Typography variant="h5">4.9</Typography>
							<StarIcon />
						</Box>
						<Box>
							<Typography variant="h6">{user.phone}</Typography>
							<Typography variant="h6">{user.email}</Typography>
						</Box>
						<Button
							variant="contained"
							sx={{ width: "100%", my: 2, fontSize: 22 }}
						>
							Message
						</Button>
					</Box>
				</Grid2>
			</Grid2>
		</Box>
	);
}
