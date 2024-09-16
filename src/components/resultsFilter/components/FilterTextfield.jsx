import { TextField } from "@mui/material";
import React from "react";
import { useSearchParams } from "react-router-dom";

export default function FilterTextfield({
	name,
	type,
	label,
	value,
	min = 0,
	max = 255,
}) {
	const [searchParams, setSearchParams] = useSearchParams();

	function handleChange(e) {
		let { name, value } = e.target;
		if (value < min) {
			value = min;
		} else if (value > max) {
			value = max;
		}
		setSearchParams((prev) => {
			const newParams = new URLSearchParams(prev);
			newParams.set(name, value);
			return newParams;
		});
	}

	return (
		<TextField
			onChange={handleChange}
			name={name}
			value={searchParams.get(name) || value || ""}
			fullWidth
			slotProps={{ htmlInput: { min: min, max: max } }}
			type={type}
			label={label}
			sx={{ mb: 1 }}
		/>
	);
}
