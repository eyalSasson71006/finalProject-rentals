import React, { useEffect, useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCurrentUser } from "../../../providers/UserProvider";
import useUsers from "../../../hooks/useUsers";
import ROUTES from "../../../routes/routesModel";

export default function Logged() {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const navigate = useNavigate();
	const { user } = useCurrentUser();
	const { getUserById, userData, handleLogout } = useUsers();

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	useEffect(() => {
		getUserById(user._id);
	}, [user]);

	return (
		<>
			<Tooltip title="My Account">
				<IconButton
					onClick={handleClick}
					sx={{ p: 0, display: "inline-flex", marginLeft: 2 }}
				>
					<Avatar
						alt="avatar"
						src={
							userData ? userData.image.src : "/images/avatar.png"
						}
					/>
				</IconButton>
			</Tooltip>
			<Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
				<MenuItem
					onClick={() => {
						navigate(ROUTES.USER_PROFILE + "/" + user._id);
						handleClose();
					}}
				>
					My account
				</MenuItem>
				<MenuItem
					onClick={() => {
						navigate(ROUTES.CREATE_APARTMENT);
						handleClose();
					}}
				>
					List Apartment
				</MenuItem>
				<MenuItem
					onClick={() => {
						navigate(ROUTES.EDIT_USER + "/" + user._id);
						handleClose();
					}}
				>
					Edit account
				</MenuItem>
				<MenuItem
					onClick={() => {
						handleLogout();
						navigate(ROUTES.ROOT);
					}}
				>
					Logout
				</MenuItem>
			</Menu>
		</>
	);
}
