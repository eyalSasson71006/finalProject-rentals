import { Box, Card, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import CardLikeComponent from "../CardLikeComponent";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { titleCase } from "../../../helpers/helperFunctions";
import { Link, useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
import MoreIcon from "../../MoreIcon";
import MenuItem from "@mui/material/MenuItem";
import useApartments from "../../../hooks/useApartments";
import { useCurrentUser } from "../../../providers/UserProvider";
import CardUnavailable from "../CardUnavailable";
import { handleBrokenApartmentImg } from "../../../helpers/brokenImages";

export default function LargeCardComponent({ apartment }) {
	const { palette } = useTheme();
	const { handleDelete, toggleAvailability } = useApartments();
	const [isAvailable, setIsAvailable] = useState(apartment.available);
	const [displayCard, setDisplayCard] = useState(true);
	const { user } = useCurrentUser();
	const navigate = useNavigate();
	const onDelete = () => {
		if (
			confirm("Are you sure you want to delete " + apartment.title + "?")
		) {
			handleDelete(apartment._id);
			setDisplayCard(false);
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
		<>
			{displayCard && (
				<Card
					sx={{
						margin: "8px",
						padding: "15px",
						width: "700px",
						minWidth: "535px",
						height: "280px",
						borderRadius: "15px",
						overflow: "hidden",
						position: "relative",
						display: "flex",
						justifyContent: "left",
						backgroundColor: "#70887120",
						border: `1px solid ${palette.primary.main}`,
					}}
				>
					<Box mr={2}>
						<Box
							sx={{
								position: "relative",
								width: "250px",
							}}
						>
							<Box
								component="img"
								src={apartment.image.src}
								alt={apartment.image.alt}
								onError={handleBrokenApartmentImg}
								sx={{
									width: "250px",
									height: "250px",
									objectFit: "cover",
									borderRadius: "10px",
									position: "absolute",
								}}
							/>
							{!isAvailable && <CardUnavailable />}
						</Box>
					</Box>
					<Box sx={{ width: "50%", mr: "auto" }}>
						<Link
							style={{ color: palette.primary.main }}
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
								my: 1.5,
								display: "-webkit-box",
								WebkitBoxOrient: "vertical",
								overflow: "hidden",
								textOverflow: "ellipsis",
								WebkitLineClamp: 3,
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
						<Typography fontWeight={"bold"}>
							${apartment.price} Night
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
						{checkOwner() && (
							<MoreIcon sx={{ mb: "auto" }}>
								{user.isOwner && (
									<MenuItem
										key={"toggle availability"}
										onClick={onToggleAvailability}
									>
										{isAvailable
											? "Mark as unavailable"
											: "Mark as available"}
									</MenuItem>
								)}
								<MenuItem
									key={"Edit Apartment"}
									onClick={() =>
										navigate(
											ROUTES.EDIT_APARTMENT +
												"/" +
												apartment._id
										)
									}
								>
									Edit Apartment
								</MenuItem>
								<MenuItem
									key={"Delete Apartment"}
									onClick={onDelete}
								>
									Delete Apartment
								</MenuItem>
							</MoreIcon>
						)}
						{user && (
							<CardLikeComponent
								color="#333"
								apartment={apartment}
							/>
						)}
						<Box
							sx={{
								backgroundColor: palette.primary.main,
								padding: "5px 10px",
								borderRadius: "10px",
								display: "flex",
								gap: "5px",
							}}
						>
							<StarIcon sx={{ color: "white", width: "20px" }} />
							<Typography
								sx={{ color: "white", fontSize: "1.1rem" }}
							>
								{apartment.rating.toFixed(1)}
							</Typography>
						</Box>
					</Box>
				</Card>
			)}
		</>
	);
}
