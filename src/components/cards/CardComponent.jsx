import { Box, Card, CardActionArea, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardLikeComponent from "./CardLikeComponent";
import CardFooterComponent from "./CardFooterComponent";
import ROUTES from "../../routes/routesModel";
import MoreIcon from "../MoreIcon";
import useApartments from "../../hooks/useApartments";
import { useCurrentUser } from "../../providers/UserProvider";

export default function CardComponent({ apartment }) {
	const navigate = useNavigate();
	const [isAvailable, setIsAvailable] = useState(apartment.available);
	const { handleDelete, toggleAvailability } = useApartments();
	const { user } = useCurrentUser();

	const onDelete = () => {
		if (
			confirm("Are you sure you want to delete " + apartment.title + "?")
		) {
			handleDelete(apartment._id);
		}
	};

	const onToggleAvailability = async () => {
		setIsAvailable(await toggleAvailability(apartment._id));
	};

	const checkOwner = () => {
		if (user?._id == apartment.owner || user?.isAdmin) return true;
		return false;
	};
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
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				{user && <CardLikeComponent apartment={apartment} />}
				{checkOwner() && (
					<MoreIcon sx={{ padding: "15px 20px" }}>
						<MenuItem
							key={"toggle availability"}
							onClick={onToggleAvailability}
						>
							{isAvailable
								? "Mark as unavailable"
								: "Mark as available"}
						</MenuItem>
						<MenuItem
							key={"Edit Apartment"}
							onClick={() =>
								navigate(
									ROUTES.EDIT_APARTMENT + "/" + apartment._id
								)
							}
						>
							Edit Apartment
						</MenuItem>
						<MenuItem key={"Delete Apartment"} onClick={onDelete}>
							Delete Apartment
						</MenuItem>
					</MoreIcon>
				)}
			</Box>
			<CardFooterComponent apartment={apartment} />
		</Card>
	);
}
