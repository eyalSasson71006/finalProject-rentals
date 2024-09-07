import { Typography } from "@mui/material";
import React from "react";
import ROUTES from "../../../../routes/routesModel";
import { Link } from "react-router-dom";

export default function Logo() {
	return (
		<div>
			<Link to={ROUTES.ROOT} style={{textDecoration:"none"}}>
				<Typography
					variant="h4"
					sx={{
						fontFamily: "fantasy, arial, sans-serif",
						display: { md: "inline-flex", xs: "none" },
					}}
					color="text.primary"
				>
					Logo
				</Typography>
			</Link>
		</div>
	);
}
