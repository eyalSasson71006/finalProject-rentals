import React from "react";
import Box from "@mui/material/Box";
import "../index.css";
const Spinner = ({ size = 80, height = "90vh" }) => {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				minHeight: { height },
				flexGrow: 1,
			}}
		>
			<img
				src="/images/logo.svg"
				alt="spinner"
				width={size}
				height={size}
				className="spinner"
			/>
		</Box>
	);
};
export default Spinner;
