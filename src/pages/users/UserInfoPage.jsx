import { Box, Grid2, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useUsers from "../../hooks/useUsers";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import Review from "../../components/reviews/Review";
import CardsListToggle from "../../components/cards/CardsListToggle";
import { useCurrentUser } from "../../providers/UserProvider";
import { titleCase } from "../../helpers/helperFunctions";
import UserDetailsSideBar from "../../components/users/userDetailsSideBar";

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
						<CardsListToggle apartments={userApartments} />
					</Box>
					{userReviews.length > 0 && (
						<Typography variant="h3" mb={3}>{`About ${
							user?._id == id
								? "Me"
								: titleCase(userData.name.first)
						}`}</Typography>
					)}
					<Box sx={{ maxHeight: "500px", overflowY: "auto" }}>
						{userReviews.map((review) => (
							<Review key={review._id} reviewObj={review} />
						))}
					</Box>
				</Grid2>
				<Grid2 size={"auto"}>
					<UserDetailsSideBar userData={userData} />
				</Grid2>
			</Grid2>
		</Box>
	);
}
