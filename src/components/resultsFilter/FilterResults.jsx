import React from "react";
import { Box, Button, List } from "@mui/material";
import FilterAccordion from "./components/FilterAccordion";
import FilterCheckbox from "./components/FilterCheckbox";
import FilterSlider from "./components/FilterSlider";
import amenities from "../../models/amenities";
import FilterNumberInput from "./components/FilterNumberInput";
import SortResultsComponent from "./components/SortResultsComponent";

export default function FilterResults({ filterParams, resetFunc }) {
	return (
		<Box my={8} sx={{ position: "sticky", top: "100px" }}>
			{resetFunc && <Button onClick={resetFunc}>Clear filters</Button>}
			<FilterAccordion title={"Sort by"}>
				<SortResultsComponent
					keys={["Any", "price", "rating"]}
					name={"sort"}
				/>
			</FilterAccordion>
			<FilterAccordion title={"Price/Month"}>
				<FilterSlider
					minValue={filterParams?.minPrice || 0}
					maxValue={filterParams?.maxPrice || 10_000}
				/>
			</FilterAccordion>

			<FilterAccordion title={"Guests"}>
				<FilterNumberInput name="guests" value={0} addPlus={false} />
			</FilterAccordion>
			<FilterAccordion title={"Rooms"}>
				<FilterNumberInput name="bedrooms" value={0} />
				<FilterNumberInput name="bathrooms" value={0} />
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
