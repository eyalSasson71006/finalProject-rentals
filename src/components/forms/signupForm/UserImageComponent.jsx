import { Box } from "@mui/material";
import React from "react";
import Input from "../Input";
import { handleBrokenUserImg } from "../../../helpers/brokenImages";

export default function UserImageComponent({ errors, data, onInputChange }) {
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
					style={{ width: "25vw", height: "25vw", borderRadius: "50%" }}
					src={data.src}
					onError={handleBrokenUserImg}
					alt="profile picture"
				/>
			</Box>
		</Box>
	);
}
