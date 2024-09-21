import React from "react";
import initialSignupForm from "../users/helpers/initialForms/initialSignupForm";
import signupSchema from "../users/models/signupSchema";
import useUsers from "../hooks/useUsers";
import { Box } from "@mui/material";
import StepperForm from "../components/forms/StepperForm";
import useForm from "../hooks/useForm";
import UserBasicDetails from "../components/forms/signupForm/UserBasicDetails";
import UserAddressComponent from "../components/forms/signupForm/UserAddressComponent";
import UserImageComponent from "../components/forms/signupForm/UserImageComponent";
import PageHeadline from "../components/PageHeadline";

export default function SignupPage() {
	const { handleSignup } = useUsers();
	const { data, errors, handleChange, onSubmit, validateForm } = useForm(
		initialSignupForm,
		signupSchema,
		handleSignup
	);
	const steps = ["Basic Details", "Address", "Add Image"];

	const components = [
		<UserBasicDetails
			errors={errors}
			data={data}
			onInputChange={handleChange}
		/>,
		<UserAddressComponent
			errors={errors}
			data={data}
			onInputChange={handleChange}
		/>,
		<UserImageComponent
			errors={errors}
			data={data}
			onInputChange={handleChange}
		/>,
	];
	return (
		<Box>
			<PageHeadline title={"Signup Page"} />
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					mt: 5,
				}}
			>
				<StepperForm
					validateForm={validateForm}
					components={components}
					steps={steps}
					onSubmit={onSubmit}
				/>
			</Box>
		</Box>
	);
}
