import React from "react";
import TextField from "@mui/material/TextField";
import { Grid2 } from "@mui/material";

const Input = ({
	variant = "outlined",
	type = "text",
	name,
	data,
	label,
	required = true,
	error,
	onChange,
	multiline,
	maxRows = 1,
	...rest
}) => {
	return (
		<Grid2 size={{ xs: 12 }} {...rest}>
			<TextField
				variant={variant}
				label={label}
				type={type}
				id={name}
				name={name}
				value={data[name] ? data[name] : ""}
				required={required}
				multiline={multiline}
				maxRows={maxRows}
				helperText={error}
				error={Boolean(error)}
				onChange={onChange}
				fullWidth
				autoComplete="off"
			/>
		</Grid2>
	);
};
export default Input;
