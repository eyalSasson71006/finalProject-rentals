import React, { useState } from "react";
import {
	Avatar,
	Button,
	TableCell,
	TableRow,
	Typography,
	useTheme,
} from "@mui/material";
import BlockIcon from "@mui/icons-material/Block";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Link } from "react-router-dom";
import ROUTES from "../../routes/routesModel";

export default function CrmRow({
	user,
	handleDeleteUser,
	handleToggleOwnerUser,
}) {
	const { palette } = useTheme();
	const [isOwner, setIsOwner] = useState(user.isOwner);
	const [displayRow, setDisplayRow] = useState(true);
	const onToggleOwner = async () => {
		if (
			confirm(
				"Are you sure you want to toggle this user owner status?\n" +
					(isOwner
						? "This action will also set all of his apartments unavailable!"
						: "This action will not set his apartments available...")
			)
		) {
			let userData = await handleToggleOwnerUser(user._id);
			setIsOwner(userData.isOwner);
		}
	};

	return (
		<>
			{displayRow && (
				<TableRow>
					<TableCell>
						<Avatar
							alt={user.image.alt}
							src={user.image.src || "/avatar.png"}
						/>
					</TableCell>
					<TableCell>
						<Link
							to={ROUTES.USER_PROFILE + "/" + user._id}
							style={{ color: palette.primary.main }}
						>
							{user.name.first} {user.name.last}
						</Link>
					</TableCell>
					<TableCell
						sx={{ maxWidth: "300px", overflowWrap: "break-word" }}
					>
						{user.email}
					</TableCell>
					<TableCell>{user.phone}</TableCell>
					<TableCell align="center">
						{user.isAdmin ? (
							<CheckCircleOutlineIcon />
						) : (
							<BlockIcon />
						)}
					</TableCell>
					<TableCell align="center">
						{isOwner ? <CheckCircleOutlineIcon /> : <BlockIcon />}
					</TableCell>
					<TableCell
						align="right"
						sx={{ display: "flex", gap: "15px" }}
					>
						<Button
							color="error"
							variant="contained"
							onClick={() => {
								if (
									confirm(
										"Are you sure you want to delete this user? \nThis action will also remove all of his apartments!"
									)
								) {
									handleDeleteUser(user._id);
									setDisplayRow(false);
								}
							}}
							disabled={user.isAdmin}
						>
							DELETE USER
						</Button>
						<Button
							color="warning"
							variant="contained"
							onClick={onToggleOwner}
							disabled={user.isAdmin}
						>
							TOGGLE Owner
						</Button>
					</TableCell>
				</TableRow>
			)}
		</>
	);
}
