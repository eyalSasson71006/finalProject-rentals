import { Box, Card, CardActionArea } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import CardHeaderComponent from "./components/CardHeaderComponent";
import CardFooterComponent from "./components/CardFooterComponent";

export default function CardComponent({ apartment }) {
	const navigate = useNavigate()
	return (
		<Card
			sx={{
				margin: "8px",
				width: "250px",
				height: "250px",
				borderRadius: "50px",
				overflow: "hidden",
				position: "relative",
			}}
		>
			<CardActionArea onClick={()=> navigate(ROUTES.APARTMENT_INFO + "/" +apartment.id)}>
				<Box
					component="img"
					src={apartment.src}
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
			<CardHeaderComponent apartment={apartment} />
			<CardFooterComponent apartment={apartment} />
		</Card>
	);
}
