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

export default function FilterResults() {
	return (
		<Box my={8} sx={{ position: "sticky", top: "100px" }}>
			<FilterAccordion title={"Price"}>
				<TextField type="number" label="Minimum" sx={{ mb: 1 }} />
				<TextField type="number" label="Maximum" />
			</FilterAccordion>
			<FilterAccordion title={"City/Location"}>
				<List component="div" disablePadding>
					<ListItem>
						<ListItemText primary="Tel Aviv" />
						<Checkbox edge="end" />
					</ListItem>
					<ListItem>
						<ListItemText primary="Haifa" />
						<Checkbox edge="end" />
					</ListItem>
					<ListItem>
						<ListItemText primary="Jerusalem" />
						<Checkbox edge="end" />
					</ListItem>
					<ListItem>
						<ListItemText primary="Holon" />
						<Checkbox edge="end" />
					</ListItem>
				</List>
			</FilterAccordion>
			<FilterAccordion title={"Property Type"}>
				<List component="div" disablePadding>
					<ListItem>
						<ListItemText primary="House" />
						<Checkbox edge="end" />
					</ListItem>
					<ListItem>
						<ListItemText primary="Apartment" />
						<Checkbox edge="end" />
					</ListItem>
					<ListItem>
						<ListItemText primary="Penthouse" />
						<Checkbox edge="end" />
					</ListItem>
					<ListItem>
						<ListItemText primary="Studio" />
						<Checkbox edge="end" />
					</ListItem>
				</List>
			</FilterAccordion>
			<FilterAccordion title={"Bedrooms"}>
				<TextField type="number" value={1} />
			</FilterAccordion>
			<FilterAccordion title={"Bathrooms"}>
				<TextField type="number" value={1} />
			</FilterAccordion>
			<FilterAccordion title={"Amenities"}>
				<List component="div" disablePadding>
					<ListItem>
						<ListItemText primary="Air Conditioning" />
						<Checkbox edge="end" />
					</ListItem>
					<ListItem>
						<ListItemText primary="Heating" />
						<Checkbox edge="end" />
					</ListItem>
					<ListItem>
						<ListItemText primary="WiFi" />
						<Checkbox edge="end" />
					</ListItem>
					<ListItem>
						<ListItemText primary="Parking" />
						<Checkbox edge="end" />
					</ListItem>
					<ListItem>
						<ListItemText primary="Washing Machine" />
						<Checkbox edge="end" />
					</ListItem>
					<ListItem>
						<ListItemText primary="Dryer" />
						<Checkbox edge="end" />
					</ListItem>
					<ListItem>
						<ListItemText primary="Dishwasher" />
						<Checkbox edge="end" />
					</ListItem>
					<ListItem>
						<ListItemText primary="Balcony" />
						<Checkbox edge="end" />
					</ListItem>
					<ListItem>
						<ListItemText primary="Pool" />
						<Checkbox edge="end" />
					</ListItem>
					<ListItem>
						<ListItemText primary="Gym" />
						<Checkbox edge="end" />
					</ListItem>
					<ListItem>
						<ListItemText primary="Elevator" />
						<Checkbox edge="end" />
					</ListItem>
					<ListItem>
						<ListItemText primary="Pet Friendly" />
						<Checkbox edge="end" />
					</ListItem>
					<ListItem>
						<ListItemText primary="Furnished" />
						<Checkbox edge="end" />
					</ListItem>
					<ListItem>
						<ListItemText primary="Security System" />
						<Checkbox edge="end" />
					</ListItem>
					<ListItem>
						<ListItemText primary="Fireplace" />
						<Checkbox edge="end" />
					</ListItem>
					<ListItem>
						<ListItemText primary="Garden" />
						<Checkbox edge="end" />
					</ListItem>
					<ListItem>
						<ListItemText primary="Rooftop Access" />
						<Checkbox edge="end" />
					</ListItem>
					<ListItem>
						<ListItemText primary="Smart Home Features" />
						<Checkbox edge="end" />
					</ListItem>
					<ListItem>
						<ListItemText primary="Cable TV" />
						<Checkbox edge="end" />
					</ListItem>
					<ListItem>
						<ListItemText primary="Outdoor Seating" />
						<Checkbox edge="end" />
					</ListItem>
					<ListItem>
						<ListItemText primary="Kitchen Appliances" />
						<Checkbox edge="end" />
					</ListItem>
					<ListItem>
						<ListItemText primary="Smoke Detectors" />
						<Checkbox edge="end" />
					</ListItem>
					<ListItem>
						<ListItemText primary="Wheelchair Accessible" />
						<Checkbox edge="end" />
					</ListItem>
				</List>
			</FilterAccordion>
		</Box>
	);
}
