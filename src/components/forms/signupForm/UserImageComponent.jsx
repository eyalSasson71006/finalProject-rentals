import { Box } from "@mui/material";
import React from "react";
import Input from "../Input";

export default function UserImageComponent({ errors, data, onInputChange }) {
	const handleBrokenImg = (e) => {
		e.target.src =
			"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
	};
	return (
		<Box>
			<Input
				name="src"
				label="Image Url"
				error={errors.src}
				onChange={onInputChange}
				data={data}
				size={{ xs: 12, sm: 6 }}
			/>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					pt: 3,
					objectFit: "contain",
				}}
			>
				<img
					style={{ width: "40%", borderRadius: "50%" }}
					src={data.src}
					onError={handleBrokenImg}
					alt="profile picture"
				/>
			</Box>
		</Box>
	);
}
