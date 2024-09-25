import { Box, Container, Typography, useTheme } from "@mui/material";
import React from "react";
import CardComponent from "./CardComponent";

export default function CardsListComponent({ apartments }) {
	const { palette } = useTheme();
	if (apartments.length == 0)
		return (
			<Box
				sx={{
					borderRadius: "20px",
					border: `1px solid ${palette.primary.main}`,
					m: 4,
					width:"70%"
				}}
			>
				<Typography py={5} variant="h5" textAlign={"center"}>
					No apartments to present...
				</Typography>
			</Box>
		);
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
