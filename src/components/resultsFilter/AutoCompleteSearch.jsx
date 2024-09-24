import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function AutoCompleteSearch({ locations = [], initialValue, sx, handleChange }) {
	const [value, setValue] = useState(initialValue);
	const onChange = (event, newValue) => {
		setValue(newValue);
		handleChange(event);
	};

	return (
		<Autocomplete
			options={locations}
			id="location"
			value={value}
			sx={{ ...sx, width: 300 }}
			onChange={onChange}
			renderInput={(params) => (
				<TextField {...params} label="Location" variant="outlined" />
			)}
		/>
	);
}
