import React from "react";
import Map from "./Map";
import { Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const MapPage = ({ show, closePage, address }) => {
	const mapPageStyle = {
		position: "fixed",
		top: "0",
		width: "100vw",
		height: "100%",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#242424e6",
		zIndex: "9999",
		display: show ? "flex" : "none",
	};

	const mapSectionStyle = {
		width: "40%",
		height: "400px",
	};

	const closeButtonStyle = {
		position: "relative",
		top: "-210px",
		zIndex: "9999",
	};

	return (
		<Box sx={mapPageStyle}>
			<IconButton sx={closeButtonStyle} onClick={closePage}>
				<CloseIcon sx={{ color: "white" }} />
			</IconButton>
			<Box sx={mapSectionStyle}>
				<Map center={[0, 0]} zoom={16} address={address} />
			</Box>
		</Box>
	);
};

export default MapPage;
