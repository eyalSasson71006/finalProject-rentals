import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { titleCase } from "../../helpers/helperFunctions";

export default function AutoCompleteSearch({
	locations = [],
	initialValue,
	sx,
	handleChange,
}) {
	const [value, setValue] = useState(initialValue);
	const onChange = (event, newValue) => {
		setValue(newValue);
		handleChange(event);
	};

	return (
		<Autocomplete
			options={locations.map((location) => titleCase(location))}
			id="location"
			value={value}
			sx={{ ...sx, width: 350 }}
			onChange={onChange}
			disableClearable
			renderInput={(params) => (
				<TextField {...params} label="Location" variant="outlined" />
			)}
		/>
	);
}
