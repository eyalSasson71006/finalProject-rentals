import { Box } from "@mui/material";
import React from "react";
import Input from "../Input";
import { handleBrokenApartmentImg } from "../../../helpers/brokenImages";

export default function AddImageComponent({ errors, data, onInputChange }) {
	return (
		<Box>
			<Input
				name="src"
				label="Image Url"
				error={errors.src}
				onChange={onInputChange}
				data={data}
				required={true}
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
					style={{ width: "40%", borderRadius: "15px" }}
					src={data.src}
					onError={handleBrokenApartmentImg}
					alt="apartment preview"
				/>
			</Box>
		</Box>
	);
}
