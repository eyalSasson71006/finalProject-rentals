import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Error = ({ errorMessage }) => {
	const setErrorMsg = (message) => {
		if (
			message == "AxiosError: Request failed with status code 429" ||
			message == "Request failed with status code 429"
		) {
			return "Too many requests, please try again after 24 hours.";
		}
		return message;
	};
	return (
		<Container
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<img
				style={{ width: "300px" }}
				src="/images/img404.png"
				alt="broken robot"
			/>
			<Typography m={2} variant="h5" component="h3">
				{setErrorMsg(errorMessage)}
			</Typography>
		</Container>
	);
};
export default Error;
