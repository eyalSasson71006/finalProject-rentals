import React from "react";
import { Container } from "@mui/material";
import useForm from "../hooks/useForm";
import initialSignupForm from "../users/helpers/initialForms/initialSignupForm";
import signupSchema from "../users/models/signupSchema";
import SignupForm from "../components/users/SignupForm";
import useUsers from "../hooks/useUsers";

export default function SignupPage() {
	const {handleSignup} = useUsers()
	const {
		data,
		errors,
		handleChange,
		handleReset,
		validateForm,
		onSubmit,
	} = useForm(initialSignupForm, signupSchema, handleSignup);

	return (
		<Container
			sx={{
				paddingTop: 8,
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<SignupForm
				onSubmit={onSubmit}
				onReset={handleReset}
				validateForm={validateForm}
				title={"Signup form"}
				errors={errors}
				data={data}
				onInputChange={handleChange}
			/>
		</Container>
	);
}
