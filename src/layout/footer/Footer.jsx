import React, { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InfoIcon from "@mui/icons-material/Info";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { Divider } from "@mui/material";

export default function Footer() {
	return (
		<Box
			sx={{
				width: "100%",
				position: "sticky",
				bottom: "0",
				zIndex: "999",
			}}
		>
			<Divider />
			<BottomNavigation showLabels>
				<BottomNavigationAction label="About" icon={<InfoIcon />} />
				<BottomNavigationAction
					label="Favorites"
					icon={<FavoriteIcon />}
				/>
				<BottomNavigationAction
					label="My Apartments"
					icon={<ApartmentIcon />}
				/>
			</BottomNavigation>
		</Box>
	);
}
