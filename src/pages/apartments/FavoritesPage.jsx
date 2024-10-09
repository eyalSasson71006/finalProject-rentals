import { Box } from "@mui/material";
import React, { useEffect } from "react";
import PageHeadline from "../../components/PageHeadline";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import { useCurrentUser } from "../../providers/UserProvider";
import useApartments from "../../hooks/useApartments";
import CardsListToggle from "../../components/cards/CardsListToggle";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";

export default function FavoritesPage() {
	const { user } = useCurrentUser();
	const { getAllApartments, apartments, isLoading, error } = useApartments();

	useEffect(() => {
		getAllApartments();
	}, []);

	if (isLoading) return <Spinner />;
	if (error) return <Error errorMessage={error} />;

	if (!user) return <Navigate to={ROUTES.ROOT} replace />;
	return (
		<Box>
			<PageHeadline title={"WishList"} />
			<CardsListToggle
				apartments={apartments.filter((apartment) =>
					apartment.likes.includes(user._id)
				)}
			/>
		</Box>
	);
}
