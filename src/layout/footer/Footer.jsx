import React, { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Divider } from "@mui/material";

export default function Footer() {
	return (
		<Box
			sx={{
				width: "100%",
				position: "fixed",
				bottom: "0",
				zIndex: "999",
			}}
		>
            <Divider/>
			<BottomNavigation showLabels>
				<BottomNavigationAction
					label="Recents"
					icon={<RestoreIcon />}
				/>
				<BottomNavigationAction
					label="Favorites"
					icon={<FavoriteIcon />}
				/>
				<BottomNavigationAction
					label="Nearby"
					icon={<LocationOnIcon />}
				/>
			</BottomNavigation>
		</Box>
	);
}
