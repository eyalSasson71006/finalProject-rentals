import React from "react";
import { Container } from "@mui/material";
import useForm from "../hooks/useForm";
import initialSignupForm from "../users/helpers/initialForms/initialSignupForm";
import signupSchema from "../users/models/signupSchema";
import SignupForm from "../components/users/SignupForm";
import normalizeUser from "../users/helpers/normalization/normalizeUser";

const handleSignup = (data) => {
	console.log(normalizeUser(data));
};

export default function SignupPage() {
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
