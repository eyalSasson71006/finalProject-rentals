import React, { useState } from "react";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function VerticalToggleButtons({ view, setView }) {
	const handleChange = (event, nextView) => {
		if (nextView !== null) {
			setView(nextView);
		}
	};

	return (
		<ToggleButtonGroup
			orientation="horizontal"
			value={view}
			exclusive
			onChange={handleChange}
		>
			<ToggleButton value="large" aria-label="large">
				<ViewListIcon />
			</ToggleButton>
			<ToggleButton value="small" aria-label="small">
				<ViewModuleIcon />
			</ToggleButton>
		</ToggleButtonGroup>
	);
}
