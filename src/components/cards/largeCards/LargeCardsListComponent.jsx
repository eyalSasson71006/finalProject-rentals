import { Box, Container, Typography } from "@mui/material";
import React from "react";
import LargeCardComponent from "./LargeCardComponent";

export default function LargeCardsListComponent({ apartments }) {
	if (apartments.length == 0)
		return (
			<Box
				sx={{ borderRadius: "20px", border: "1px solid #708871", m: 4 }}
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
				<LargeCardComponent key={apartment._id} apartment={apartment} />
			))}
		</Container>
	);
}
