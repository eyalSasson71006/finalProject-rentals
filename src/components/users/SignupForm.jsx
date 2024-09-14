import React from "react";
import Input from "../forms/Input";
import PasswordInput from "../forms/PasswordInput";
import Form from "../forms/Form";

export default function SignupForm({
	onSubmit,
	onReset,
	validateForm,
	title,
	errors,
	data,
	onInputChange,
}) {
	return (
		<Form
			onSubmit={onSubmit}
			onReset={onReset}
			validateForm={validateForm}
			title={title}
			styles={{ maxWidth: "800px" }}
		>
			<Input
				name="first"
				label="first name"
				error={errors.first}
				onChange={onInputChange}
				data={data}
				size={{ xs: 6 }}
			/>
			<Input
				name="middle"
				label="middle name"
				error={errors.middle}
				onChange={onInputChange}
				data={data}
				size={{ xs: 6 }}
				required={false}
			/>
			<Input
				name="last"
				label="last name"
				error={errors.last}
				onChange={onInputChange}
				data={data}
				size={{ xs: 6 }}
			/>
			<Input
				name="phone"
				label="phone"
				type="phone"
				error={errors.phone}
				onChange={onInputChange}
				data={data}
				size={{ xs: 6 }}
			/>
			<Input
				name="email"
				label="email"
				type="email"
				error={errors.email}
				onChange={onInputChange}
				data={data}
				size={{ xs: 6 }}
			/>
			<PasswordInput
				error={errors.password}
				onChange={onInputChange}
				data={data}
				required={true}
				size={{ xs: 6 }}
			/>
			<Input
				name="url"
				label="image url"
				error={errors.url}
				onChange={onInputChange}
				data={data}
				size={{ xs: 6 }}
				required={false}
			/>
			<Input
				name="alt"
				label="image alt"
				error={errors.alt}
				onChange={onInputChange}
				data={data}
				size={{ xs: 6 }}
				required={false}
			/>
			<Input
				name="state"
				label="state"
				error={errors.state}
				onChange={onInputChange}
				data={data}
				size={{ xs: 6 }}
				required={false}
			/>
			<Input
				label="country"
				name="country"
				error={errors.country}
				onChange={onInputChange}
				data={data}
				size={{ xs: 6 }}
			/>
			<Input
				name="city"
				label="city"
				error={errors.city}
				onChange={onInputChange}
				data={data}
				size={{ xs: 6 }}
			/>
			<Input
				name="street"
				label="street"
				error={errors.street}
				onChange={onInputChange}
				data={data}
				size={{ xs: 6 }}
			/>
			<Input
				name="houseNumber"
				label="house Number"
				type="number"
				error={errors.houseNumber}
				onChange={onInputChange}
				data={data}
				size={{ xs: 6 }}
			/>
			<Input
				name="zip"
				label="zip"
				error={errors.zip}
				onChange={onInputChange}
				data={data}
				size={{ xs: 6 }}
				required={false}
			/>
		</Form>
	);
}
