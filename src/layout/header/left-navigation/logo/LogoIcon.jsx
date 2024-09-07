import React from "react";
import { Avatar, IconButton } from "@mui/material";
import ROUTES from "../../../../routes/routesModel";
import { Link } from "react-router-dom";
import DiamondIcon from "@mui/icons-material/Diamond";

export default function LogoIcon() {
	return (
		<Link to={ROUTES.ROOT} style={{textDecoration:"none"}}>
			<IconButton>
				<Avatar>
					<DiamondIcon/>
				</Avatar>
			</IconButton>
		</Link>
	);
}
