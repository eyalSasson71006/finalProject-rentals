import { TextField } from "@mui/material";
import React from "react";
import { useSearchParams } from "react-router-dom";

export default function FilterTextfield({ name, type, label, value }) {
	const [searchParams, setSearchParams] = useSearchParams();

	function handleChange(e) {
		const { name, value, type } = e.target;
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
			type={type}
			label={label}
			sx={{ mb: 1 }}
		/>
	);
}
