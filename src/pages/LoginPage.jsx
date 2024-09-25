import React from "react";
import { Container } from "@mui/material";
import LoginForm from "../components/users/LoginForm";
import initialLoginForm from "../users/helpers/initialForms/initialLoginForm";
import loginSchema from "../users/models/loginSchema";
import useForm from "../hooks/useForm";
import useUsers from "../hooks/useUsers";
import ROUTES from "../routes/routesModel";
import { Navigate } from "react-router-dom";
import { useCurrentUser } from "../providers/UserProvider";

export default function LoginPage() {
	const { handleLogin } = useUsers();
	const { user } = useCurrentUser();
	const { data, errors, handleChange, handleReset, validateForm, onSubmit } =
		useForm(initialLoginForm, loginSchema, handleLogin);

	if (user) return <Navigate to={ROUTES.ROOT} replace />;
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
