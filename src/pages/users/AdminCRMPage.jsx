import {
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

export default function AdminCRMPage() {
	const { isLoading, error, handleGetAllUsers, handleDeleteUser } =
		useUsers();
	const [allUsers, setAllUsers] = useState();
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
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="Admin CRM Table">
					<TableHead>
						<TableRow>
							<TableCell>Image</TableCell>
							<TableCell>Name</TableCell>
							<TableCell>Email</TableCell>
							<TableCell>Phone</TableCell>
							<TableCell>Admin?</TableCell>
							<TableCell>Business?</TableCell>
							<TableCell></TableCell>
						</TableRow>
					</TableHead>
					<CrmTable
						allUsers={allUsers}
						handleDeleteUser={handleDeleteUser}
						handleToggleBusinessUser={() =>
							console.log("Toggle Business status")
						}
					/>
				</Table>
			</TableContainer>
		</>
	);
}
