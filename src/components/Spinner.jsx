import React from "react";
import Box from "@mui/material/Box";
import "../index.css";
import { Backdrop } from "@mui/material";
const Spinner = ({ size = 80, height = "90vh" }) => {
	return (
		<Backdrop
			sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
			open={true}
		>
			<img
				src="/images/logo.svg"
				alt="spinner"
				width={size}
				height={size}
				className="spinner"
			/>
		</Backdrop>
	);
};
export default Spinner;
