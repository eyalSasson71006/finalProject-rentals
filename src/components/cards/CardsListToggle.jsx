import { Box, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import VerticalToggleButtons from "./CardsToggleButton";
import CardsListComponent from "./smallCards/CardsListComponent";
import LargeCardsListComponent from "./largeCards/LargeCardsListComponent";
import { useCurrentUser } from "../../providers/UserProvider";

export default function CardsListToggle({ apartments }) {
	const [view, setView] = useState("small");
	const [apartmentsList, setApartmentsList] = useState(apartments);
	const { user } = useCurrentUser();

	useEffect(() => {
		if (!user || user.isAdmin) return;
		setApartmentsList(
			apartments.filter(
				(apartment) =>
					apartment.owner == user._id || apartment.available
			)
		);
	}, [user]);

	return (
		<Container
			sx={{
				display: "flex",
				flexWrap: "wrap",
				justifyContent: "center",
				gap: "20px",
				my: 7,
				position: "relative",
			}}
		>
			<Box
				sx={{
					position: "absolute",
					top: "0",
					right: "10px",
					display: { xs: "none", md: "block" },
				}}
			>
				<VerticalToggleButtons view={view} setView={setView} />
			</Box>
			{view == "small" && (
				<CardsListComponent apartments={apartmentsList} />
			)}
			{view == "large" && (
				<LargeCardsListComponent apartments={apartmentsList} />
			)}
		</Container>
	);
}
