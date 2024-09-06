import { Box, Card, CardActionArea } from "@mui/material";
import React from "react";
import CardHeaderComponent from "./components/CardHeaderComponent";
import CardFooterComponent from "./components/CardFooterComponent";

export default function CardComponent() {
	return (
		<Card
			sx={{
                margin:"8px",
				width: "250px",
				height: "250px",
				borderRadius: "50px",
				overflow: "hidden",
				position: "relative",
			}}
		>
			<CardActionArea>
				<Box
					component="img"
					src="/images/apartmentStockImage.jpg"
					// src="/images/searchBackground2.jpg"
					sx={{
						width: "250px",
						height: "250px",
						objectFit: "cover",
						borderRadius: "40px",
						position: "absolute",
					}}
				/>
				<Box
					sx={{
						position: "absolute",
						width: "250px",
						height: "250px",
						background:
							"linear-gradient(to bottom, rgba(0, 0, 0, 0) 23%, rgba(0, 0, 0, 0.57) 64%, rgba(0, 0, 0, 0.70) 90%)",
					}}
				/>
			</CardActionArea>
			<CardHeaderComponent />
			<CardFooterComponent />
		</Card>
	);
}
