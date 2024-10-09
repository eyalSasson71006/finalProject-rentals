import React, { useEffect } from "react";
import initialEditUserForm from "../../users/helpers/initialForms/initialEditUserForm";
import useUsers from "../../hooks/useUsers";
import { Box } from "@mui/material";
import StepperForm from "../../components/forms/StepperForm";
import useForm from "../../hooks/useForm";
import UserAddressComponent from "../../components/forms/signupForm/UserAddressComponent";
import UserImageComponent from "../../components/forms/signupForm/UserImageComponent";
import PageHeadline from "../../components/PageHeadline";
import { useCurrentUser } from "../../providers/UserProvider";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import mapUserToModel from "../../users/helpers/normalization/mapUserToModel";
import EditUserBasicDetails from "../../components/forms/editUserForm/EditUserBasicDetails";
import ROUTES from "../../routes/routesModel";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import EditUserSchema from "../../users/models/EditUserSchema";

export default function EditUserPage() {
	const { handleEditUser, getUserById, isLoading, error } = useUsers();
	const { user } = useCurrentUser();
	const { id } = useParams();
	const navigate = useNavigate();
	const { data, setData, errors, handleChange, validateForm, onSubmit } =
		useForm(initialEditUserForm, EditUserSchema, () => {
			handleEditUser(id, data);
			navigate(ROUTES.USER_PROFILE+"/"+user._id)
		});

	useEffect(() => {
		const getData = async () => {
			setData(await getUserById(id));
			setData((prev) => mapUserToModel(prev));
		};
		getData();
	}, [id]);

	const steps = ["Basic Details", "Address", "Add Image"];

	const components = [
		<EditUserBasicDetails
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

	if (isLoading) return <Spinner />;
	if (error) return <Error errorMessage={error} />;
	if (!user || user._id != id) return <Navigate to={ROUTES.ROOT} replace />;

	return (
		<Box>
			<PageHeadline title={"Edit Account"} />
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
