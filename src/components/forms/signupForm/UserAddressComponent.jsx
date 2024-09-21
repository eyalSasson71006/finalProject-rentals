import React from 'react'
import Input from '../Input';
import { Grid2 } from '@mui/material';

export default function UserAddressComponent({ errors, data, onInputChange }) {
	return (
		<Grid2 container spacing={2} size={{ xs: 12 }}>
			<Input
				name="state"
				label="State"
				error={errors.state}
				onChange={onInputChange}
				data={data}
				required={false}
				size={{ xs: 12, sm: 6 }}
			/>
			<Input
				name="country"
				label="country"
				error={errors.country}
				onChange={onInputChange}
				data={data}
				size={{ xs: 12, sm: 6 }}
			/>
			<Input
				name="city"
				label="City"
				error={errors.city}
				onChange={onInputChange}
				data={data}
				size={{ xs: 12, sm: 6 }}
			/>
			<Input
				name="street"
				label="Street"
				error={errors.street}
				onChange={onInputChange}
				data={data}
				size={{ xs: 12, sm: 6 }}
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
				label="Zip"
				type="number"
				error={errors.zip}
				onChange={onInputChange}
				data={data}
				required={false}
				size={{ xs: 12, sm: 6 }}
			/>

		</Grid2>
	);
}
