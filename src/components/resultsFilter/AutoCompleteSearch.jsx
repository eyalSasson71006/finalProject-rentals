import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { titleCase } from "../../helpers/helperFunctions";
import { useSearchParams } from "react-router-dom";

export default function AutoCompleteSearch({
	locations = [],
	initialValue,
	sx,
}) {
	const [value, setValue] = useState(initialValue);
	const [searchParams, setSearchParams] = useSearchParams();
	const onChange = (event, newValue) => {
		setValue(newValue);
	};

	useEffect(() => {
		if (!value) return;
		setSearchParams((prev) => {
			const newParams = new URLSearchParams(prev);
			newParams.set("location", value);
			return newParams;
		});
	}, [value]);

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
