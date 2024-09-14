import React from "react";
import {
	Box,
	Checkbox,
	List,
	ListItem,
	ListItemText,
	TextField,
} from "@mui/material";
import FilterAccordion from "./components/FilterAccordion";
import FilterCheckbox from "./components/FilterCheckbox";
import FilterTextfield from "./components/FilterTextfield";
import { useSearchParams } from "react-router-dom";

export default function FilterResults() {

	return (
		<Box my={8} sx={{ position: "sticky", top: "100px" }}>
			<FilterAccordion title={"Price"}>
				<FilterTextfield
					name="minimumPrice"
					type="number"
					label="Minimum"
				/>
				<FilterTextfield
					name="maximumPrice"
					type="number"
					label="Maximum"
				/>
			</FilterAccordion>
			<FilterAccordion title={"City/Location"}>
				<List component="div" disablePadding>
					<FilterCheckbox name="telAviv" />
					<FilterCheckbox name="haifa" />
					<FilterCheckbox name="jerusalem" />
					<FilterCheckbox name="holon" />
				</List>
			</FilterAccordion>
			<FilterAccordion title={"Property Type"}>
				<List component="div" disablePadding>
					<FilterCheckbox name="house" />
					<FilterCheckbox name="apartment" />
					<FilterCheckbox name="penthouse" />
					<FilterCheckbox name="studio" />
				</List>
			</FilterAccordion>
			<FilterAccordion title={"Bedrooms"}>
				<FilterTextfield name="bedrooms" type="number" value={1} />
			</FilterAccordion>
			<FilterAccordion title={"Bathrooms"}>
				<FilterTextfield name="bathrooms" type="number" value={1} />
			</FilterAccordion>
			<FilterAccordion title={"Amenities"}>
				<List component="div" disablePadding>
					<FilterCheckbox name="airConditioning" />
					<FilterCheckbox name="heating" />
					<FilterCheckbox name="wifi" />
					<FilterCheckbox name="parking" />
					<FilterCheckbox name="washingMachine" />
					<FilterCheckbox name="dryer" />
					<FilterCheckbox name="dishwasher" />
					<FilterCheckbox name="balcony" />
					<FilterCheckbox name="pool" />
					<FilterCheckbox name="gym" />
					<FilterCheckbox name="elevator" />
					<FilterCheckbox name="petFriendly" />
					<FilterCheckbox name="furnished" />
					<FilterCheckbox name="securitySystem" />
					<FilterCheckbox name="fireplace" />
					<FilterCheckbox name="garden" />
					<FilterCheckbox name="rooftopAccess" />
					<FilterCheckbox name="smartHomeFeatures" />
					<FilterCheckbox name="cableTV" />
					<FilterCheckbox name="outdoorSeating" />
					<FilterCheckbox name="kitchenAppliances" />
					<FilterCheckbox name="smokeDetectors" />
					<FilterCheckbox name="wheelchairAccessible" />
				</List>
			</FilterAccordion>
		</Box>
	);
}
