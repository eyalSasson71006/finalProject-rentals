import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import ROUTES from "../../../../routes/routesModel";
import { Link } from "react-router-dom";

export default function LogoIcon() {
	return (
		<Box sx={{ display: "flex", alignItems: "center" }}>
			<Link to={ROUTES.ROOT}>
				<IconButton>
					<img src="/images/logo.png" />
				</IconButton>
			</Link>
			<Link to={ROUTES.ROOT} style={{ textDecoration: "none" }}>
				<Typography
					variant="h4"
					sx={{
						display: { md: "inline-flex", xs: "none" },
					}}
					color="#2f2f2f"
				>
					RentMate
				</Typography>
			</Link>
		</Box>
	);
}
