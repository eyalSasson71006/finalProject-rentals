import { Box, Grid2, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { camelCaseToText } from "../helpers/helperFunctions";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function AmenitiesComponent({ apartment }) {
	const { palette } = useTheme();
	const [amenities, setAmenities] = useState([]);

	useEffect(() => {
		setAmenities(
			Object.entries(apartment.amenities).map((amenity, index) => {
				if (amenity[1] && amenity[0] != "_id")
					return (
						<Grid2
							size={6}
							key={amenity[0] + index}
							sx={{ display: "flex" }}
						>
							<Typography>
								{camelCaseToText(amenity[0])}
							</Typography>
							<CheckCircleOutlineIcon color="primary" />
						</Grid2>
					);
			})
		);
	}, [apartment]);

	return (
		<Box
			sx={{
				borderRadius: "12px",
				border: `1px solid ${palette.primary.main}`,
				padding: "10px",
				mb: 8,
			}}
		>
			<Typography variant="h4" mb={2}>
				Amenities:
			</Typography>
			<Grid2 container>
				{amenities.filter(Boolean).length > 0 ? (
					amenities.map((amenity) => amenity)
				) : (
					<Typography>
						Apartment does not have any amenities...
					</Typography>
				)}
			</Grid2>
		</Box>
	);
}
