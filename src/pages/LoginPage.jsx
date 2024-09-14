import React from "react";
import { Container } from "@mui/material";
import LoginForm from "../components/users/LoginForm";
import initialLoginForm from "../users/helpers/initialForms/initialLoginForm";
import loginSchema from "../users/models/loginSchema";
import useForm from "../hooks/useForm";

const handleLogin = (data)=>{
	console.log(data);
	
}

export default function LoginPage() {
	const { data, errors, handleChange, handleReset, validateForm, onSubmit } =
		useForm(initialLoginForm, loginSchema, handleLogin);

	return (
		<>
			<Container
				sx={{
					paddingTop: 8,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<LoginForm
					onSubmit={onSubmit}
					onReset={handleReset}
					validateForm={validateForm}
					title="Login Form"
					errors={errors}
					data={data}
					onInputChange={handleChange}
				/>
			</Container>
		</>
	);
}
