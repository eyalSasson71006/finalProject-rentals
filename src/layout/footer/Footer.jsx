import {
	Box,
	Button,
	CircularProgress,
	Divider,
	IconButton,
	Typography,
	useTheme,
} from "@mui/material";
import React from "react";
import Input from "../../components/forms/Input";
import useForm from "../../hooks/useForm";
import initialContactForm from "./helpers/initialContactFrom";
import contactSchema from "./helpers/contactSchema";
import { useIsDark } from "../../providers/CustomThemeProvider";
import useEmail from "../../hooks/useEmail";
import ROUTES from "../../routes/routesModel";
import { Link } from "react-router-dom";

export default function Footer() {
	const { handleSubmit, loading } = useEmail();
	const { isDark } = useIsDark();
	const { data, errors, handleChange, validateForm, onSubmit, handleReset } =
		useForm(initialContactForm, contactSchema, () => {
			handleSubmit(data);
			handleReset();
		});
	return (
		<Box>
			<Divider />
			<Box
				sx={{
					height: "350px",
					display: "flex",
					justifyContent: "space-evenly",
					alignItems: "center",
					p: 1,
				}}
			>
				<Box
					sx={{
						width: "10%",
						flexDirection: "column",
						alignItems: "center",
						textAlign: "center",
						display: { md: "flex", xs: "none" },
					}}
				>
					<img
						style={{ width: "80px" }}
						alt="logo"
						src="/images/logo.svg"
					/>
					<Typography variant="h4" color={isDark ? "#fff" : "#333"}>
						RentMate
					</Typography>
					<Link to={ROUTES.ABOUT}>
						<Button
							sx={{
								mt: 2,
								fontSize: "1rem",
								color: isDark ? "#fff" : "#333",
								textDecoration: "underline",
							}}
						>
							About page
						</Button>
					</Link>
				</Box>
				<Box sx={{ width: "70%" }}>
					<Typography variant="h3" color={"primary"}>
						Contact Us
					</Typography>
					<Box sx={{ display: "flex", gap: "10px" }}>
						<Box sx={{ width: "50%" }}>
							<Input
								sx={{ mt: 2 }}
								name="name"
								id="contactName"
								label="Name"
								type="name"
								error={errors.name}
								onChange={handleChange}
								data={data}
							/>
							<Input
								sx={{ mt: 2 }}
								name="phone"
								id="contactPhone"
								label="Phone"
								type="phone"
								error={errors.phone}
								onChange={handleChange}
								data={data}
							/>
							<Input
								sx={{ mt: 2 }}
								name="email"
								id="contactEmail"
								label="Email"
								type="email"
								error={errors.email}
								onChange={handleChange}
								data={data}
							/>
						</Box>
						<Box sx={{ width: "50%", textAlign: "right" }}>
							<Input
								sx={{ mt: 2 }}
								name="content"
								label="Content"
								error={errors.content}
								onChange={handleChange}
								data={data}
								multiline={true}
								minRows={4}
								maxRows={4}
							/>
							<Button
								sx={{
									width: "fit-content",
									minWidth: "80px",
									mt: "10px",
								}}
								onClick={onSubmit}
								variant="contained"
								disabled={!validateForm()}
								fullWidth
							>
								{loading ? (
									<CircularProgress size={24} />
								) : (
									"Submit"
								)}
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
			<Divider />
			<Box
				sx={{
					height: "50px",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					px: 2,
				}}
			>
				<Typography variant="h6">&copy; Eyal Sasson</Typography>
				<Typography variant="h6">all rights reserved</Typography>
			</Box>
		</Box>
	);
}
