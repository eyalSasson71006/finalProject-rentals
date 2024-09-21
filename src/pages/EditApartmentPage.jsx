import React, { useEffect } from "react";
import useApartments from "../hooks/useApartments";
import { useCurrentUser } from "../providers/UserProvider";
import { Navigate, useParams } from "react-router-dom";
import useForm from "../hooks/useForm";
import initialApartmentForm from "../apartments/helpers/initialForms/initialApartmentForm";
import apartmentSchema from "../apartments/models/apartmentSchema";
import mapApartmentToModel from "../apartments/helpers/normalization/mapApartmentToModel";
import ROUTES from "../routes/routesModel";
import Spinner from "../components/Spinner";
import Error from "../components/Error";
import { Box } from "@mui/material";
import StepperForm from "../components/forms/StepperForm";
import BasicDetailsComponent from "../components/forms/addApartmentForm/BasicDetailsComponent";
import AmenitiesComponent from "../components/forms/addApartmentForm/AmenitiesComponent";
import AddImageComponent from "../components/forms/addApartmentForm/AddImageComponent";
import PageHeadline from "../components/PageHeadline";

export default function EditApartmentPage() {
	const { handleEdit, getApartment, isLoading, error } = useApartments();
	const { user } = useCurrentUser();
	const { id } = useParams();
	const {
		data,
		setData,
		errors,
		handleChange,
		handleReset,
		handleChangeCheckBox,
		validateForm,
		onSubmit,
	} = useForm(initialApartmentForm, apartmentSchema, () => {
		handleEdit(id, data);
	});

	useEffect(() => {
		const getData = async () => {
			setData(await getApartment(id));
			setData((prev) => mapApartmentToModel(prev));
		};
		getData();
	}, [id]);

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
	if (isLoading) return <Spinner />;
	if (error) return <Error errorMessage={error} />;
	if (!user) return <Navigate to={ROUTES.ROOT} replace />;
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
