import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import PageHeadline from "../components/PageHeadline";
import useUsers from "../hooks/useUsers";
import Spinner from "../components/Spinner";
import Error from "../components/Error";
import { useCurrentUser } from "../providers/UserProvider";
import CardsListComponent from "../components/cards/CardsListComponent";
import LargeCardComponent from "../components/largeCards/LargeCardComponent";
import LargeCardsListComponent from "../components/largeCards/LargeCardsListComponent";

export default function MyApartmentsPage() {
	const { user } = useCurrentUser();
	const { handleGetUsersApartments, isLoading, error } = useUsers();
	const [userApartments, setUserApartments] = useState();

	useEffect(() => {
		if (!user) return;
		const getData = async () => {
			setUserApartments(await handleGetUsersApartments(user._id));
		};
		getData();
	}, [user]);

	if (isLoading) return <Spinner />;
	if (error) return <Error errorMessage={error} />;
	return (
		<Box>
			<PageHeadline title={"My Apartments"} />
			{/* <CardsListComponent apartments={userApartments} /> */}
			<LargeCardsListComponent apartments={userApartments} />
		</Box>
	);
}
