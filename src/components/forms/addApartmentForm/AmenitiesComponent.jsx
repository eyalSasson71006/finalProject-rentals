import React from "react";
import Input from "../Input";
import CheckBoxInput from "../CheckBoxInput";
import { Grid2, List } from "@mui/material";
import amenities from "../../../models/amenities";

export default function AmenitiesComponent({
	errors,
	data,
	onInputChange,
	handleChangeCheckBox,
}) {
	return (
		<Grid2
			container
			spacing={2}
			size={{ xs: 12 }}
			sx={{ maxHeight: "auto" }}
		>
			<Input
				name="bedrooms"
				label="Bedrooms"
				type="number"
				error={errors.bedrooms}
				onChange={onInputChange}
				data={data}
				required={true}
				size={{ xs: 12, sm: 4 }}
			/>
			<Input
				name="bathrooms"
				label="Bathrooms"
				type="number"
				error={errors.bathrooms}
				onChange={onInputChange}
				data={data}
				required={true}
				size={{ xs: 12, sm: 4 }}
			/>
			<Input
				name="guests"
				label="Guests"
				type="number"
				error={errors.guests}
				onChange={onInputChange}
				data={data}
				required={true}
				size={{ xs: 12, sm: 4 }}
			/>
			<Grid2
				container
				spacing={2}
				size={{ xs: 12, sm: 6 }}
				sx={{ maxHeight: "auto" }}
			>
				<Input
					name="state"
					label="State"
					error={errors.state}
					onChange={onInputChange}
					data={data}
					required={false}
				/>
				<Input
					name="country"
					label="Country"
					error={errors.country}
					onChange={onInputChange}
					data={data}
				/>
				<Input
					name="city"
					label="City"
					error={errors.city}
					onChange={onInputChange}
					data={data}
				/>
				<Input
					name="street"
					label="Street"
					error={errors.street}
					onChange={onInputChange}
					data={data}
				/>
				<Input
					name="houseNumber"
					label="House Number"
					type="number"
					error={errors.houseNumber}
					onChange={onInputChange}
					data={data}
					size={{ xs: 12, sm: 6 }}
				/>
				<Input
					name="zip"
					label="Zip code"
					type="number"
					error={errors.zip}
					onChange={onInputChange}
					data={data}
					required={false}
					size={{ xs: 12, sm: 6 }}
				/>
			</Grid2>
			<Grid2
				container
				spacing={2}
				size={{ xs: 12, sm: 6 }}
				sx={{ maxHeight: "350px", overflowY: "auto" }}
			>
				<List
					component="div"
					disablePadding
					sx={{ display: "flex", flexWrap: "wrap" }}
				>
					{amenities.map((item, index) => (
						<CheckBoxInput
							handleChange={handleChangeCheckBox}
							key={index}
							name={item}
							data={data}
						/>
					))}
				</List>
			</Grid2>
		</Grid2>
	);
}
