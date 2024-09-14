import React from "react";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Button, Grid2 } from "@mui/material";
import { Link } from "react-router-dom";
import Form from "../forms/Form";
import Input from "../forms/Input";
import PasswordInput from "../forms/PasswordInput";
import ROUTES from "../../routes/routesModel";

export default function LoginForm({
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
				name="email"
				label="Email"
				type="email"
				error={errors.email}
				onChange={onInputChange}
				data={data}
				required={true}
			/>
			<PasswordInput
				error={errors.password}
				onChange={onInputChange}
				data={data}
				required={true}
			/>
			<Grid2 size={{ xs: 12 }}>
				<Button
					variant="outlined"
					component={Link}
					to={ROUTES.SIGNUP}
					startIcon={<AccountBoxIcon />}
					sx={{ width: "100%" }}
				>
					Sign Up
				</Button>
			</Grid2>
		</Form>
	);
}
