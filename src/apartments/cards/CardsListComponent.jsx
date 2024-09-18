import { Box, Container } from "@mui/material";
import React from "react";
import CardComponent from "./CardComponent";

export default function CardsListComponent({apartments}) {
	return (
		<Container
			sx={{
				display: "flex",
				flexWrap: "wrap",
				justifyContent: "center",
				gap: "20px",
				my: 7,
			}}
		>
			{apartments.map((apartment) => (
				<CardComponent key={apartment._id} apartment={apartment} />
			))}
		</Container>
	);
}
