import { Box, Container } from "@mui/material";
import React, { useState } from "react";
import VerticalToggleButtons from "./CardsToggleButton";
import CardsListComponent from "./smallCards/CardsListComponent";
import LargeCardsListComponent from "./largeCards/LargeCardsListComponent";

export default function CardsListToggle({ apartments }) {
	const [view, setView] = useState("small");
	
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
			{view == "small" && <CardsListComponent apartments={apartments} />}
			{view == "large" && (
				<LargeCardsListComponent apartments={apartments} />
			)}
		</Container>
	);
}
