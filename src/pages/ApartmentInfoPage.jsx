import { Box, Button, Container, Grid2, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import PageHeadline from "../components/PageHeadline";
import StarIcon from "@mui/icons-material/Star";
import Review from "../cards/components/Review";
import apartment from "../models/apartment";
import AddReview from "../cards/components/addReview";
import AmenitiesComponent from "../components/AmenitiesComponent";

export default function ApartmentInfoPage() {
	const { id } = useParams();
	return (
		<>
			<PageHeadline
				title={apartment.title}
				subtitle={apartment.subtitle}
			/>
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
				<Grid2 size={12} sx={{ textAlign: "center" }}>
					<img
						src={apartment.src}
						style={{
							width: "clamp(300px, 100%, 50vw",
							borderRadius: "12px",
						}}
					/>
				</Grid2>
				<Grid2 size={8}>
					<Typography my={1} variant="h5" color="gray">
						Location: {apartment.location} <br />
						price: {apartment.price} <br />
					</Typography>
					<Typography
						variant="body1"
						sx={{ fontSize: 18, lineHeight: 1.7 }}
						mb={8}
					>
						{apartment.description}
					</Typography>
					<AmenitiesComponent/>
					<AddReview />
					{apartment.reviews.map((review) => (
						<Review key={review.id} reviewObj={review} />
					))}
				</Grid2>
				<Grid2 size={"auto"}>
					<Box sx={{ position: "sticky", top: "100px" }}>
						<img
							src={apartment.owner.img}
							style={{ width: "200px", borderRadius: "50px" }}
						/>
						<Typography variant="h5">
							{apartment.owner.fullName}
						</Typography>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								gap: "4px",
							}}
						>
							<Typography variant="h6">Host rating: </Typography>
							<Typography variant="h5">
								{apartment.owner.rating}
							</Typography>
							<StarIcon />
						</Box>
						<Button
							variant="contained"
							sx={{ width: "100%", my: 2, fontSize: 22 }}
						>
							RESERVE
						</Button>
					</Box>
				</Grid2>
			</Grid2>
		</>
	);
}
