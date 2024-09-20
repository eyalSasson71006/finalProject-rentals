import React from "react";
import { Box, List } from "@mui/material";
import FilterAccordion from "./components/FilterAccordion";
import FilterCheckbox from "./components/FilterCheckbox";
import FilterTextfield from "./components/FilterTextfield";
import FilterSlider from "./components/FilterSlider";
import amenities from "../../models/amenities";

export default function FilterResults() {
	return (
		<Box my={8} sx={{ position: "sticky", top: "100px" }}>
			<FilterAccordion title={"Price"}>
				<FilterSlider minValue={0} maxValue={10_000} />
			</FilterAccordion>

			<FilterAccordion title={"Bathrooms"}>
				<FilterTextfield name="bathrooms" type="number" value={1} />
			</FilterAccordion>
			<FilterAccordion title={"Amenities"}>
				<List component="div" disablePadding>
					{amenities.map((item, index) => (
						<FilterCheckbox key={index} name={item} />
					))}
				</List>
			</FilterAccordion>
		</Box>
	);
}
