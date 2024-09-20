import React from "react";
import { FormControl, Grid2, InputLabel, MenuItem, Select } from "@mui/material";

const SelectInput = ({
	name,
	data,
	label,
	required = true,
	onChange,
	items,
	...rest
}) => {
	return (
		<Grid2 size={{ xs: 12 }} {...rest}>
			<FormControl fullWidth>
				<InputLabel id={name}>{label}</InputLabel>
				<Select
					labelId={name}
					id={name}
					name={name}
					value={data[name] ? data[name] : ""}
					label={label}
					onChange={onChange}
					required={required}
				>
					{items.map((item, index) => (
						<MenuItem key={item + index} value={item}>
							{item}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Grid2>
	);
};
export default SelectInput;
