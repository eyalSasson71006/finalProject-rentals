import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchBar from "../components/resultsFilter/SearchBar";
import { useIsDark } from "../providers/CustomThemeProvider";
import useApartments from "../hooks/useApartments";
import CardsListComponent from "../components/cards/smallCards/CardsListComponent";
import Spinner from "../components/Spinner";
import Error from "../components/Error";

export default function MainPage() {
	const { isDark } = useIsDark();
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const {
		handleGetFilterParams,
		getAllApartments,
		filterParams,
		apartments,
		isLoading,
		error,
	} = useApartments();

	const backgroundImages = [
		"/images/searchBackground1.jpg",
		"/images/searchBackground2.jpg",
		"/images/searchBackground3.jpg",
		"/images/searchBackground4.jpg",
		"/images/searchBackground5.jpg",
		"/images/searchBackground6.jpg",
		"/images/searchBackground7.jpg",
	];

	useEffect(() => {
		getAllApartments();
		handleGetFilterParams();

		// Set a timer to switch the background image
		const intervalId = setInterval(() => {
			setCurrentImageIndex(
				(prevIndex) => (prevIndex + 1) % backgroundImages.length
			);
		}, 10_000);

		return () => clearInterval(intervalId);
	}, []);

	if (isLoading) return <Spinner />;
	if (error) return <Error errorMessage={error} />;

	return (
		<>
			<Box
				sx={{
					backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
					transition: "background-image 1s ease-in-out",
					height: "75vh",
					display: "flex",
					alignItems: "center",
				}}
			>
				<SearchBar locations={filterParams?.locations} />
			</Box>
			<Container sx={{ my: 5, width: "80vw" }}>
				<Typography variant="h2" sx={{ my: 2 }}>
					About us
				</Typography>
				<Typography variant="body1" fontSize={20}>
					Welcome to RentMate, the trusted platform that connects
					apartment owners with renters looking for their perfect
					home. Whether you're offering a cozy city loft or searching
					for the ideal place to settle down, we make it easy to find
					the perfect match. Our mission is to simplify the rental
					process by creating a seamless experience for both property
					owners and renters. With RentMate, you can easily list,
					discover, and rent apartments with confidence. We provide a
					secure, user-friendly platform where landlords can showcase
					their properties and renters can search by location, budget,
					and preferences. At RentMate, we believe in fostering a
					community where everyone can find their next home,
					hassle-free. With our advanced search tools and personalized
					recommendations, you're just a few clicks away from your new
					space. Start your journey today and discover a new way to
					rent, with RentMate!
				</Typography>
			</Container>
			<Box sx={{ py: 5, backgroundColor: isDark ? "#333" : "#eee" }}>
				<Typography
					variant="h2"
					sx={{
						my: 2,
						textAlign: "center",
						fontSize: { xs: "3rem", md: "4rem" },
					}}
				>
					Recommended Apartments
				</Typography>
				<CardsListComponent
					apartments={apartments
						.filter((apartment) => apartment.available)
						.sort((a, b) => b.rating - a.rating)
						.slice(0, 4)}
				/>
			</Box>
		</>
	);
}
