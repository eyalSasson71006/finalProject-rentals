import { Box, Card, Typography } from "@mui/material";
import React from "react";
import CardHeaderComponent from "../CardHeaderComponent";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { titleCase } from "../../../helpers/helperFunctions";
import { Link, useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
import MoreIcon from "../../MoreIcon";
import MenuItem from "@mui/material/MenuItem";
import useApartments from "../../../hooks/useApartments";

export default function LargeCardComponent({ apartment }) {
	const { handleDelete } = useApartments();
	const navigate = useNavigate();
	const onDelete = () => {
		if (
			confirm("Are you sure you want to delete " + apartment.title + "?")
		) {
			handleDelete(apartment._id);
		}
	};

	return (
		<Card
			sx={{
				margin: "8px",
				padding: "15px",
				width: "700px",
				height: "fit-content",
				borderRadius: "15px",
				overflow: "hidden",
				position: "relative",
				display: "flex",
				justifyContent: "left",
				backgroundColor: "#70887120",
				border: "1px solid #708871",
			}}
		>
			<Box mr={2}>
				<Box
					component="img"
					src={apartment.image.src}
					alt={apartment.image.alt}
					sx={{
						width: "250px",
						height: "250px",
						objectFit: "cover",
						borderRadius: "10px",
					}}
				/>
			</Box>
			<Box sx={{ width: "50%", mr: "auto" }}>
				<Link
					style={{ color: "#708871" }}
					to={ROUTES.APARTMENT_INFO + "/" + apartment._id}
				>
					<Typography variant="h5">
						{titleCase(apartment.title)}
					</Typography>
				</Link>
				<Typography>{titleCase(apartment.subtitle)}</Typography>
				<Typography
					variant="body2"
					sx={{
						my:1.5,
						display: "-webkit-box",
						WebkitBoxOrient: "vertical",
						overflow: "hidden",
						textOverflow: "ellipsis",
						WebkitLineClamp: 3, // Limits to 3 lines and shows "..."
					}}
				>
					{titleCase(apartment.description)}
				</Typography>
					<Typography my={1.5}>
						<LocationOnIcon />
						{`${titleCase(apartment.address.city)}, ${titleCase(
							apartment.address.country
						)}`}
					</Typography>
			</Box>
			<Box
				sx={{
					width: "auto",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<MoreIcon sx={{ mb: "auto" }}>
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
				<CardHeaderComponent color="#333" apartment={apartment} />
				<Box
					sx={{
						backgroundColor: "#333",
						padding: "5px 10px",
						borderRadius: "10px",
						display: "flex",
						gap: "5px",
					}}
				>
					<StarIcon sx={{ color: "white", width: "20px" }} />
					<Typography sx={{ color: "white", fontSize: "1.1rem" }}>
						{apartment.rating.toFixed(1)}
					</Typography>
				</Box>
			</Box>
		</Card>
	);
}
