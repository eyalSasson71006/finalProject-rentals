import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { Box, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ROUTES from "../../../routes/routesModel";

export default function MobileNavBar({ sx }) {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const navigate = useNavigate();

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Box sx={sx}>
			<Tooltip title="Navigation Bar">
				<IconButton
					onClick={handleClick}
					sx={{ p: 0, display: "inline-flex", marginRight: 2 }}
				>
					<MenuIcon />
				</IconButton>
			</Tooltip>
			<Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
				<MenuItem
					onClick={() => {
						navigate(ROUTES.ROOT);
						handleClose();
					}}
				>
					Home
				</MenuItem>
				<MenuItem
					onClick={() => {
						navigate(ROUTES.ABOUT);
						handleClose();
					}}
				>
					About
				</MenuItem>
					<MenuItem
						onClick={() => {
							navigate(ROUTES.FAV_APARTMENTS);
							handleClose();
						}}
					>
						Fav Apartments
					</MenuItem>
					<MenuItem
						onClick={() => {
							navigate(ROUTES.MY_CARDS);
							handleClose();
						}}
					>
						My Apartments
					</MenuItem>
			</Menu>
		</Box>
	);
}
