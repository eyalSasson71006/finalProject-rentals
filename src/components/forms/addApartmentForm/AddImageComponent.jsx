import { Box } from "@mui/material";
import React from "react";
import Input from "../Input";

export default function AddImageComponent({ errors, data, onInputChange }) {
	const handleBrokenImg = (e) => {    
		e.target.src =
			"https://saterdesign.com/cdn/shop/products/property-placeholder_a9ec7710-1f1e-4654-9893-28c34e3b6399_600x.jpg?v=1500393334";
	};
	return (
		<Box>
			<Input
				name="imageUrl"
				label="Image Url"
				error={errors.imageUrl}
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
					src={data.imageUrl}
					onError={handleBrokenImg}
					alt="apartment preview"
				/>
			</Box>
		</Box>
	);
}
