import React from "react";
import Input from "../Input";
import SelectInput from "../SelectInput";
import { Grid2 } from "@mui/material";

export default function BasicDetailsComponent({
	errors,
	data,
	onInputChange,
}) {
	return (
		<Grid2 container spacing={2} size={{ xs: 12 }}>
			<Input
				name="title"
				label="Title"
				error={errors.title}
				onChange={onInputChange}
				data={data}
				required={true}
				size={{ xs: 12, sm: 6 }}
			/>
			<Input
				name="subtitle"
				label="Subtitle"
				error={errors.subtitle}
				onChange={onInputChange}
				data={data}
				required={true}
				size={{ xs: 12, sm: 6 }}
			/>
			<SelectInput
				name="propertyType"
				label="Property Type"
				error={errors.propertyType}
				onChange={onInputChange}
				data={data}
				items={["house", "apartment", "penthouse", "studio"]}
				size={{ xs: 12, sm: 6 }}
			/>
			<Input
				name="price"
				label="Price/Night"
				type="number"
				error={errors.price}
				onChange={onInputChange}
				data={data}
				required={true}
				size={{ xs: 12, sm: 6 }}
			/>
			<Input
				name="description"
				label="Description"
				error={errors.description}
				onChange={onInputChange}
				data={data}
				required={true}
				multiline={true}
				maxRows={4}
			/>
		</Grid2>
	);
}
