import { Box } from "@mui/material";
import React, { useEffect } from "react";
import PageHeadline from "../components/PageHeadline";
import Spinner from "../components/Spinner";
import Error from "../components/Error";
import { useCurrentUser } from "../providers/UserProvider";
import useApartments from "../hooks/useApartments";
import CardsListToggle from "../components/cards/CardsListToggle";

export default function FavoritesPage() {
	const { user } = useCurrentUser();
	const { getAllApartments, apartments, isLoading, error } = useApartments();

	useEffect(() => {
		getAllApartments();
	}, []);

	if (isLoading) return <Spinner />;
	if (error) return <Error errorMessage={error} />;

	return (
		<Box>
			<PageHeadline title={"Favorite Apartments"} />
			<CardsListToggle
				apartments={apartments.filter((apartment) =>
					apartment.likes.includes(user._id)
				)}
			/>
		</Box>
	);
}
