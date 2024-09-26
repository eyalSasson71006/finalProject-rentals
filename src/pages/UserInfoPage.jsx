import { Box, Button, Grid2, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import useUsers from "../hooks/useUsers";
import Spinner from "../components/Spinner";
import Error from "../components/Error";
import Review from "../components/reviews/Review";
import CardsListToggle from "../components/cards/CardsListToggle";
import { useCurrentUser } from "../providers/UserProvider";
import { titleCase } from "../helpers/helperFunctions";
import { handleBrokenUserImg } from "../helpers/brokenImages";

export default function UserInfoPage() {
	const { id } = useParams();
	const {
		getUserById,
		handleGetUsersApartments,
		handleGetUsersReviews,
		isLoading,
		error,
	} = useUsers();
	const [userData, setUserData] = useState();
	const [userApartments, setUserApartments] = useState();
	const [userReviews, setUserReviews] = useState([]);
	const { user } = useCurrentUser();

	useEffect(() => {
		const getData = async () => {
			setUserData(await getUserById(id));
			setUserApartments(await handleGetUsersApartments(id));
			setUserReviews(await handleGetUsersReviews(id));
		};
		getData();
	}, [id]);

	if (isLoading) return <Spinner />;
	if (error) return <Error errorMessage={error} />;

	return (
		<Box>
			<Grid2
				container
				spacing={2}
				sx={{
					justifyContent: "center",
					width: { xs: "90vw", md: "80vw" },
					margin: "50px auto",
					flexWrap: "wrap-reverse",
					gap: 10,
				}}
			>
				<Grid2 size={{ xs: 12, md: 8 }}>
					<Box sx={{ py: 0 }}>
						<Typography
							variant="h2"
							sx={{ my: 2, textAlign: "center" }}
						>
							{user?._id == id
								? "My"
								: titleCase(userData.name.first) + "'s"}{" "}
							Apartments
						</Typography>
						<CardsListToggle
							apartments={
								user?._id == id
									? userApartments
									: userApartments.filter(
											(apartment) => apartment.available
									  )
							}
						/>
					</Box>
					<Typography variant="h3" mb={3}>{`About ${
						user?._id == id ? "Me" : titleCase(userData.name.first)
					}`}</Typography>
					<Box sx={{ maxHeight: "500px", overflowY: "auto" }}>
						{userReviews.map((review) => (
							<Review key={review._id} reviewObj={review} />
						))}
					</Box>
				</Grid2>
				<Grid2 size={"auto"}>
					<Box sx={{ position: "sticky", top: "100px" }}>
						<img
							src={userData.image.src}
							alt={userData.image.alt}
							onError={handleBrokenUserImg}
							style={{ width: "200px", borderRadius: "50px" }}
						/>
						<Typography variant="h5">
							{`${userData.name.first} ${userData.name.middle} ${userData.name.last}`}
						</Typography>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								gap: "4px",
							}}
						>
							<Typography variant="h6">Host rating: </Typography>
							<Typography variant="h5">
								{userData.rating.toFixed(1)}
							</Typography>
							<StarIcon />
						</Box>
						<Box>
							<Typography variant="h6">
								{userData.phone}
							</Typography>
							<Typography variant="h6">
								{userData.email}
							</Typography>
						</Box>
						<Button
							variant="contained"
							sx={{ width: "100%", my: 2, fontSize: 22 }}
						>
							Message
						</Button>
					</Box>
				</Grid2>
			</Grid2>
		</Box>
	);
}
