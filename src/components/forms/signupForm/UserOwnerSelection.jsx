import { Box, Divider, Grid2, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ToggleButton from "@mui/material/ToggleButton";
import PersonIcon from "@mui/icons-material/Person";

export default function UserOwnerSelection({ setData }) {
	const [selected, setSelected] = useState(null);
	const { palette } = useTheme();

	const handleSelection = (type) => {
		let value;
		if (type === "apartment") {
			value = selected === true ? null : true;
			setSelected(value);
		} else if (type === "user") {
			value = selected === false ? null : false;
			setSelected(value);
		}
		setData((prev) => ({ ...prev, isOwner: value }));
	};

	return (
		<Box>
			<Typography variant="h5" textAlign={"center"}>
				What king of user are you?
			</Typography>
			<Grid2 container size={12} my={8} justifyContent={"center"}>
				<Grid2 size={{ xs: 12, sm: 5 }} textAlign={"center"}>
					<ToggleButton
						value="check"
						selected={selected === true}
						onChange={() => handleSelection("apartment")}
					>
						<ApartmentIcon
							sx={{
								width: "150px",
								height: "150px",
								color:
									selected === true
										? palette.primary.main
										: "gray",
							}}
						/>
					</ToggleButton>
					<Typography fontSize={"1.1rem"}>
						<strong>Apartment Owner</strong>
					</Typography>
					<Typography>
						I want to post my Apartments and find renters
					</Typography>
				</Grid2>
				<Divider orientation="vertical" flexItem />
				<Grid2 size={{ xs: 12, sm: 5 }} textAlign={"center"}>
					<ToggleButton
						value="check"
						selected={selected === false}
						onChange={() => handleSelection("user")}
					>
						<PersonIcon
							size={24}
							sx={{
								width: "150px",
								height: "150px",
								color:
									selected === false
										? palette.primary.main
										: "gray",
							}}
						/>
					</ToggleButton>
					<Typography fontSize={"1.1rem"}>
						<strong>Regular User</strong>
					</Typography>
					<Typography>
						I want to find the perfect apartment for my needs
					</Typography>
				</Grid2>
			</Grid2>
		</Box>
	);
}
