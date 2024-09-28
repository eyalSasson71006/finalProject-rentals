import { Grid2 } from "@mui/material";
import React from "react";
import Input from "../Input";
import PasswordInput from "../PasswordInput";
import { Check } from "@mui/icons-material";
import CheckBoxInput from "../CheckBoxInput";

export default function UserBasicDetails({
	errors,
	data,
	onInputChange,
	handleChangeCheckBox,
}) {
	return (
		<Grid2 container spacing={2} size={{ xs: 12 }}>
			<Input
				name="first"
				label="First Name"
				error={errors.first}
				onChange={onInputChange}
				data={data}
				size={{ xs: 12, sm: 6 }}
			/>
			<Input
				name="middle"
				label="Middle Name"
				error={errors.middle}
				onChange={onInputChange}
				data={data}
				required={false}
				size={{ xs: 12, sm: 6 }}
			/>
			<Input
				name="last"
				label="Last Name"
				error={errors.last}
				onChange={onInputChange}
				data={data}
				size={{ xs: 12, sm: 6 }}
			/>
			<Input
				name="phone"
				label="Phone"
				error={errors.phone}
				onChange={onInputChange}
				data={data}
				size={{ xs: 12, sm: 6 }}
			/>
			<Input
				name="email"
				label="Email"
				type="email"
				error={errors.email}
				onChange={onInputChange}
				data={data}
				size={{ xs: 12, sm: 6 }}
			/>
			<PasswordInput
				error={errors.password}
				onChange={onInputChange}
				data={data}
				size={{ xs: 12, sm: 6 }}
			/>
			<CheckBoxInput
				label="I would like to list my properties"
				name="isOwner"
				handleChange={handleChangeCheckBox}
				data={data}
			/>
		</Grid2>
	);
}
