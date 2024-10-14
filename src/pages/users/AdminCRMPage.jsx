import {
	Box,
	Paper,
	Table,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import useUsers from "../../hooks/useUsers";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import ROUTES from "../../routes/routesModel";
import { useCurrentUser } from "../../providers/UserProvider";
import PageHeadline from "../../components/PageHeadline";
import CrmTable from "../../components/users/CrmTable";
import CrmSearchBar from "../../components/users/CrmSearchBar";

export default function AdminCRMPage() {
	const {
		isLoading,
		error,
		handleGetAllUsers,
		handleDeleteUser,
		handleToggleOwnerUser,
	} = useUsers();
	const [allUsers, setAllUsers] = useState();
	const [search, setSearch] = useState("");
	const { user } = useCurrentUser();

	useEffect(() => {
		const getData = async () => {
			setAllUsers(await handleGetAllUsers());
		};
		getData();
	}, []);

	if (!user || !user.isAdmin) return <Navigate to={ROUTES.ROOT} replace />;
	if (isLoading) return <Spinner />;
	if (error) return <Error errorMessage={error} />;
	return (
		<>
			<PageHeadline
				title={"Admin CRM"}
				subtitle={"customer relationship management"}
			/>
			<Box sx={{ display: "flex", justifyContent: "center" }}>
				<CrmSearchBar setSearch={setSearch} />
			</Box>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="Admin CRM Table">
					<TableHead>
						<TableRow>
							<TableCell>Image</TableCell>
							<TableCell>Name</TableCell>
							<TableCell>Email</TableCell>
							<TableCell>Phone</TableCell>
							<TableCell>Admin?</TableCell>
							<TableCell>Owner?</TableCell>
							<TableCell></TableCell>
						</TableRow>
					</TableHead>
					<CrmTable
						allUsers={allUsers.filter((user) =>
							(user.name.first + " " + user.name.last).includes(
								search
							)
						)}
						handleDeleteUser={handleDeleteUser}
						handleToggleOwnerUser={handleToggleOwnerUser}
					/>
				</Table>
			</TableContainer>
		</>
	);
}
