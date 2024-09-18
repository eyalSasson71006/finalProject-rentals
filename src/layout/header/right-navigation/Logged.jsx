import React, { useEffect, useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCurrentUser } from "../../../providers/UserProvider";
import useUsers from "../../../hooks/useUsers";

export default function Logged() {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const navigate = useNavigate();
	const { user } = useCurrentUser()
	const {getUserById, userById} = useUsers()

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	useEffect(()=>{
		getUserById(user._id);
	},[])
	
	return (
		<>
			<Tooltip title="My Account">
				<IconButton
					onClick={handleClick}
					sx={{ p: 0, display: "inline-flex", marginLeft: 2 }}
				>
					<Avatar alt="avatar" src={userById ? userById.image.src : "/images/avatar.png"} />
				</IconButton>
			</Tooltip>
			<Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
				<MenuItem
					onClick={() => {
						navigate(ROUTES.USER_PROFILE);
						handleClose();
					}}
				>
					My account
				</MenuItem>
				<MenuItem
					onClick={() => {
						navigate(ROUTES.EDIT_USER);
						handleClose();
					}}
				>
					Edit account
				</MenuItem>
				<MenuItem onClick={handleClose}>Logout</MenuItem>
			</Menu>
		</>
	);
}
