import { Box, Container, Typography } from "@mui/material";
import React from "react";
import SearchBar from "../components/SearchBar";
import CardsListComponent from "../cards/CardsListComponent";
import { useIsDark } from "../providers/CustomThemeProvider";

export default function MainPage() {
	const { isDark, setIsDark } = useIsDark();
	return (
		<>
			<Box
				sx={{
					backgroundImage: "url('/images/searchBackground1.jpg')",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
					height: "75vh",
					display: "flex",
					alignItems: "center",
				}}
			>
				<SearchBar />
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
			<Box
				sx={{ py: 5, backgroundColor: isDark ? "#333" : "#eee" }}
			>
				<Typography variant="h2" sx={{ my: 2,textAlign:"center" }}>
					Recommended Apartments
				</Typography>
				<CardsListComponent />
			</Box>
		</>
	);
}
