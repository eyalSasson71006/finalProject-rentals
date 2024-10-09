import React from "react";
import { Box } from "@mui/material";
import StepperForm from "../../components/forms/StepperForm";
import BasicDetailsComponent from "../../components/forms/addApartmentForm/BasicDetailsComponent";
import AmenitiesComponent from "../../components/forms/addApartmentForm/AmenitiesComponent";
import AddImageComponent from "../../components/forms/addApartmentForm/AddImageComponent";
import useForm from "../../hooks/useForm";
import apartmentSchema from "../../apartments/models/apartmentSchema";
import initialApartmentForm from "../../apartments/helpers/initialForms/initialApartmentForm";
import useApartments from "../../hooks/useApartments";
import PageHeadline from "../../components/PageHeadline";
import { useCurrentUser } from "../../providers/UserProvider";
import ROUTES from "../../routes/routesModel";
import { Navigate } from "react-router-dom";

export default function AddApartmentPage() {
	const { addApartment } = useApartments();
	const { user } = useCurrentUser();
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
	if (!user || !user.isOwner) return <Navigate to={ROUTES.ROOT} replace />;
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
