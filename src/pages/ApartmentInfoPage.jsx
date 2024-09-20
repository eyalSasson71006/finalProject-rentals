import { Box, Button, Container, Grid2, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PageHeadline from "../components/PageHeadline";
import StarIcon from "@mui/icons-material/Star";
import AmenitiesComponent from "../components/AmenitiesComponent";
import ROUTES from "../routes/routesModel";
import MapComponent from "../components/map/MapComponent";
import AddReview from "../components/reviews/AddReview";
import Review from "../components/reviews/Review";
import useApartments from "../hooks/useApartments";
import Spinner from "../components/Spinner";
import Error from "../components/Error";

export default function ApartmentInfoPage() {
	const { id } = useParams();
	const [toggle, setToggle] = useState(false);
	const [reviews, setReviews] = useState([]);
	const { getApartment, apartment, isLoading, error } = useApartments();

	useEffect(() => {
		getApartment(id);
	}, [id]);

	useEffect(() => {
		if (!apartment) return
		setReviews(apartment.reviews);
	}, [apartment]);
	
	if (isLoading) return <Spinner />;
	if (error) return <Error errorMessage={error} />;

	const address = `${apartment.address.country} ${apartment.address.city} ${apartment.address.street} ${apartment.address.houseNumber} `;
	return (
		<>
			<PageHeadline
				title={apartment.title}
				subtitle={apartment.subtitle}
			/>
			<MapComponent
				show={toggle}
				closePage={() => setToggle(false)}
				address={address}
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
						src={apartment.image.src}
						alt={apartment.image.alt}
						style={{
							width: "clamp(300px, 100%, 50vw",
							borderRadius: "12px",
						}}
					/>
				</Grid2>
				<Grid2 size={8}>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<Typography my={1} variant="h5" color="gray">
							Location: {apartment.address.city},{" "}
							{apartment.address.country} <br />
							price: {apartment.price} <br />
						</Typography>
						<Button onClick={() => setToggle(true)}>
							OPEN LOCATION ON MAP
						</Button>
					</Box>
					<Typography
						variant="body1"
						sx={{ fontSize: 18, lineHeight: 1.7 }}
						mb={8}
					>
						{apartment.description}
					</Typography>
					<AmenitiesComponent />
					<Box sx={{ maxHeight: "500px", overflowY: "auto" }}>
						<AddReview setReviews={setReviews} apartmentId={id} />
						{reviews.map((review) => (
							<Review key={review._id} reviewObj={review} />
						))}
					</Box>
				</Grid2>
				<Grid2 size={"auto"}>
					<Box sx={{ position: "sticky", top: "100px" }}>
						<img
							src={apartment.owner.image.src}
							alt={apartment.owner.image.alt}
							style={{ width: "200px", borderRadius: "50px" }}
						/>
						<Link
							style={{ textDecoration: "none", color: "inherit" }}
							to={
								ROUTES.USER_PROFILE +
								"/" +
								apartment.owner.ownerId
							}
						>
							<Typography variant="h5">
								{apartment.owner.fullName}
							</Typography>
						</Link>
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
