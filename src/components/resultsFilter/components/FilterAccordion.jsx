import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import React from "react";

export default function FilterAccordion({ title, children, sx }) {
	return (
		<Accordion sx={sx} defaultExpanded>
			<AccordionSummary
				expandIcon={<ArrowDropDownIcon />}
				aria-controls="filter-content"
				id="filter-header"
			>
				<Typography>{title}</Typography>
			</AccordionSummary>
			<AccordionDetails sx={{ maxHeight: "300px", overflow: "auto" }}>
				{children}
			</AccordionDetails>
		</Accordion>
	);
}
