import { Checkbox, ListItem, ListItemText } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { camelCaseToText } from "../../../helpers/helperFunctions";

export default function FilterCheckbox({ name }) {
	const [searchParams, setSearchParams] = useSearchParams();
	const [checked, setChecked] = useState(searchParams.get(name) === "true");

	useEffect(() => {
		setChecked(searchParams.get(name) === "true");
	}, [searchParams, name]);

	function handleChange(e) {
		const { checked } = e.target;
		setChecked(checked);
		setSearchParams((prev) => {
			const newParams = new URLSearchParams(prev);
			newParams.set(name, checked.toString());
			return newParams;
		});
	}

	return (
		<ListItem>
			<ListItemText primary={camelCaseToText(name)} />
			<Checkbox
				name={name}
				onChange={handleChange}
				checked={checked}
				edge="end"
			/>
		</ListItem>
	);
}
