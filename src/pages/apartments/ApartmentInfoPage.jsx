import {
	Box,
	Button,
	Grid2,
	MenuItem,
	Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageHeadline from "../../components/PageHeadline";
import AmenitiesComponent from "../../components/AmenitiesComponent";
import ROUTES from "../../routes/routesModel";
import MapComponent from "../../components/map/MapComponent";
import AddReview from "../../components/reviews/AddReview";
import Review from "../../components/reviews/Review";
import useApartments from "../../hooks/useApartments";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import useUsers from "../../hooks/useUsers";
import { useCurrentUser } from "../../providers/UserProvider";
import MoreIcon from "../../components/MoreIcon";
import { handleBrokenApartmentImg } from "../../helpers/brokenImages";
import { titleCase } from "../../helpers/helperFunctions";
import UserDetailsSideBar from "../../components/users/userDetailsSideBar";

export default function ApartmentInfoPage() {
	const { id } = useParams();
	const [toggle, setToggle] = useState(false);
	const [reviews, setReviews] = useState([]);
	const [isAvailable, setIsAvailable] = useState(true);
	const {
		getApartment,
		handleDelete,
		toggleAvailability,
		apartment,
		isLoading,
		error,
	} = useApartments();
	const { getUserById, userData } = useUsers();
	const { user } = useCurrentUser();
	const navigate = useNavigate();

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

	useEffect(() => {
		getApartment(id);
	}, [id]);

	useEffect(() => {
		setIsAvailable(apartment?.available);
	}, [apartment]);

	useEffect(() => {
		if (!apartment) return;
		getUserById(apartment.owner);
		setReviews(apartment.reviews);
	}, [apartment]);

	if (isLoading) return <Spinner />;
	if (error) return <Error errorMessage={error} />;

	const address = `${apartment.address.country} ${apartment.address.city} ${apartment.address.street} ${apartment.address.houseNumber} `;
	return (
		<>
			<PageHeadline
				title={apartment.title}
				subtitle={apartment.subtitle}
			/>
			{(apartment.owner == user?._id || user?.isAdmin) && (
				<Box
					sx={{
						position: "absolute",
						right: "10px",
						top: "250px",
						zIndex: "999",
					}}
				>
					<MoreIcon sx={{ mb: "auto" }}>
						{user?.isOwner && (
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
				</Box>
			)}
			<MapComponent
				show={toggle}
				closePage={() => setToggle(false)}
				address={address}
			/>
			<Grid2
				size={12}
				sx={{
					textAlign: "center",
					justifyContent: "center",
					position: "relative",
				}}
			>
				<img
					src={apartment.image.src}
					alt={apartment.image.alt}
					onError={handleBrokenApartmentImg}
					style={{
						width: "clamp(300px, 100%, 50vw)",
						borderRadius: "12px",
						position: "relative",
					}}
				/>
				{!isAvailable && (
					<Box
						sx={{
							position: "absolute",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							width: "clamp(300px, 100%, 50vw)",
							height: "100%",
							top: "0",
							right: "0",
							left: "0",
							margin: "0 auto",
							borderRadius: "12px",
							background: "rgba(0, 0, 0, 0.6)",
						}}
					>
						<Typography sx={{ color: "#fff", fontSize: "2rem" }}>
							Unavailable
						</Typography>
					</Box>
				)}
			</Grid2>
			<Grid2
				container
				spacing={2}
				sx={{
					justifyContent: "center",
					width: "80vw",
					margin: "50px auto",
					flexWrap: "wrap-reverse",
					gap: 10,
				}}
			>
				<Grid2 size={{ xs: 12, md: 8 }}>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							flexWrap: "wrap",
						}}
					>
						<Typography my={1} variant="h5" color="gray">
							Location: {titleCase(apartment.address.city)},{" "}
							{titleCase(apartment.address.country)} <br />
							Price: ${apartment.price} night <br />
						</Typography>
						<Button onClick={() => setToggle(true)}>
							OPEN LOCATION ON MAP
						</Button>
					</Box>
					<Typography
						variant="body1"
						sx={{ fontSize: 18, lineHeight: 1.7 }}
						mb={4}
					>
						{apartment.description}
					</Typography>
					<Box
						sx={{
							display: "flex",
							mb: 4,
							justifyContent: "space-evenly",
						}}
					>
						<Box sx={{ display: "flex" }}>
							<Typography fontWeight={"bold"}>Guests:</Typography>
							<Typography>{apartment.guests}</Typography>
						</Box>
						<Box sx={{ display: "flex" }}>
							<Typography fontWeight={"bold"}>
								Bed Rooms:
							</Typography>
							<Typography>{apartment.bedrooms}</Typography>
						</Box>
						<Box sx={{ display: "flex" }}>
							<Typography fontWeight={"bold"}>
								Bath Rooms:
							</Typography>
							<Typography>{apartment.bathrooms}</Typography>
						</Box>
					</Box>
					<AmenitiesComponent apartment={apartment} />
					<Box sx={{ maxHeight: "500px", overflowY: "auto" }}>
						{user && (
							<AddReview
								setReviews={setReviews}
								apartmentId={id}
							/>
						)}
						{reviews?.map((review) => (
							<Review key={review._id} reviewObj={review} />
						))}
					</Box>
				</Grid2>
				<Grid2 size={"auto"}>
					<UserDetailsSideBar userData={userData} />
				</Grid2>
			</Grid2>
		</>
	);
}
