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
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Typography
					variant="h1"
					sx={{
						textShadow: "3px 3px 4px #000",
						color: "white",
						mt: -14,
						fontSize: { xs: "3rem", md: "5rem" },
					}}
				>
					RentMate
				</Typography>
				<Typography
					variant="h2"
					sx={{
						textShadow: "3px 3px 4px #000",
						color: "white",
						mb: 2,
						fontSize: { xs: "1.2rem", md: "1.6rem" },
						textAlign: "center",
					}}
				>
					Find or list your perfect apartment with ease!
				</Typography>
				<SearchBar locations={filterParams?.locations} />
			</Box>
			<Container sx={{ my: 5, width: "80vw" }}>
				<Typography variant="h2" sx={{ my: 2 }}>
					About us
				</Typography>
				<Typography variant="body1" fontSize={20}>
					Welcome to Rent Mate, the trusted platform designed to
					connect apartment owners with renters seeking their perfect
					home. Whether you're listing a modern city loft or looking
					for the ideal place to call home, Rent Mate makes the
					process seamless and straightforward. Our mission is to
					simplify the rental experience for both property owners and
					renters. With Rent Mate, you can easily list, discover, and
					rent apartments with confidence. Our platform offers secure
					and user-friendly features, including advanced search tools
					to help renters find properties based on location, budget,
					and preferences. Plus, with our built-in chat app, landlords
					and potential renters can communicate directly to discuss
					listings or ask questions. At Rent Mate, we believe in
					fostering a hassle-free community where finding your next
					home is just a few clicks away. Start your journey today and
					explore a new, easier way to rent with Rent Mate!
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
