import React from "react";
import { Box } from "@mui/material";
import StepperForm from "../components/forms/StepperForm";
import BasicDetailsComponent from "../components/forms/addApartmentForm/BasicDetailsComponent";
import AmenitiesComponent from "../components/forms/addApartmentForm/AmenitiesComponent";
import AddImageComponent from "../components/forms/addApartmentForm/AddImageComponent";
import useForm from "../hooks/useForm";
import apartmentSchema from "../apartments/models/apartmentSchema";
import initialApartmentForm from "../apartments/helpers/initialForms/initialCardForm";
import useApartments from "../hooks/useApartments";
import PageHeadline from "../components/PageHeadline";

export default function AddApartmentPage() {
	const { addApartment } = useApartments();
	const {
		data,
		errors,
		handleChange,
		handleChangeCheckBox,
		onSubmit,
		validateForm,
	} = useForm(initialApartmentForm, apartmentSchema, addApartment);
	const steps = ["Basic Details", "Amenities", "Add Image"];

	const components = [
		<BasicDetailsComponent
			errors={errors}
			data={data}
			onInputChange={handleChange}
		/>,
		<AmenitiesComponent
			errors={errors}
			data={data}
			onInputChange={handleChange}
			handleChangeCheckBox={handleChangeCheckBox}
		/>,
		<AddImageComponent
			errors={errors}
			data={data}
			onInputChange={handleChange}
		/>,
	];
	return (
		<Box>
			<PageHeadline title={"List apartment"} />
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
