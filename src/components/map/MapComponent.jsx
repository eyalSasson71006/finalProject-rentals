import React from "react";
import Map from "./Map";
import { Box } from "@mui/material";

const MapPage = () => {
	const mapSectionStyle = {
		width: "40%",
		height: "400px", // Adjust as needed
		margin: "20px",
	};

	const mapPageStyle = {
		width: "100%",
		height: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
    backgroundColor:"#444"
	};

	return (
		<Box sx={mapPageStyle}>
			<Box sx={mapSectionStyle}>
				<Map center={[0, 0]} zoom={16} address={"jerusalem"} />
			</Box>
		</Box>
	);
};

export default MapPage;
