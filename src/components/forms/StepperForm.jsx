import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import { useIsDark } from "../../providers/CustomThemeProvider";

export default function StepperForm({
	components,
	steps,
	onSubmit,
	validateForm,
}) {
	const { isDark } = useIsDark();
	const [activeStep, setActiveStep] = useState(0);
	const [skipped, setSkipped] = useState(new Set());

	const isStepSkipped = (step) => {
		return skipped.has(step);
	};

	const handleNext = () => {
		let newSkipped = skipped;
		if (isStepSkipped(activeStep)) {
			newSkipped = new Set(newSkipped.values());
			newSkipped.delete(activeStep);
		}

		setActiveStep((prevActiveStep) => prevActiveStep + 1);
		setSkipped(newSkipped);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	return (
		<Box sx={{ width: { xs: "100%", sm: "70%" }, mb: 7 }}>
			<Stepper activeStep={activeStep}>
				{steps.map((label, index) => {
					const stepProps = {};
					const labelProps = {};
					if (isStepSkipped(index)) {
						stepProps.completed = false;
					}
					return (
						<Step key={label} {...stepProps}>
							<StepLabel {...labelProps}>{label}</StepLabel>
						</Step>
					);
				})}
			</Stepper>
			<>
				<Box
					sx={{
						p: 5,
						my: 5,
						mx: 2,
						backgroundColor: isDark ? "#333" : "#eee",
						borderRadius: "20px",
					}}
				>
					{components[activeStep]}
				</Box>
				<Box sx={{ display: "flex", flexDirection: "row" }}>
					<Button
						color="inherit"
						disabled={activeStep === 0}
						onClick={handleBack}
						sx={{ mr: 1 }}
					>
						Back
					</Button>
					<Box sx={{ flex: "1 1 auto" }} />
					{activeStep === steps.length - 1 ? (
						<Button disabled={!validateForm()} onClick={onSubmit}>
							Finish
						</Button>
					) : (
						<Button onClick={handleNext}>Next</Button>
					)}
				</Box>
			</>
		</Box>
	);
}
