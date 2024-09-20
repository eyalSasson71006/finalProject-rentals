import { Box, Card, CardActionArea } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import CardHeaderComponent from "./CardHeaderComponent";
import CardFooterComponent from "./CardFooterComponent";
import ROUTES from "../../routes/routesModel";

export default function CardComponent({ apartment }) {
	const navigate = useNavigate();
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
			<CardActionArea
				onClick={() =>
					navigate(ROUTES.APARTMENT_INFO + "/" + apartment._id)
				}
			>
				<Box
					component="img"
					src={apartment.image.src}
					alt={apartment.image.alt}
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
