import React from "react";
import { Checkbox, Grid2, ListItem, ListItemText } from "@mui/material";
import { camelCaseToText } from "../../helpers/helperFunctions";

export default function CheckBoxInput({ label = "", name, handleChange, data }) {	
	return (
		<Grid2 size={{ sm: 12, lg: 6 }}>
			<ListItem>
				<Checkbox
					name={name}
					onChange={handleChange}
					checked={data[name]}
					edge="end"
					sx={{ mr: 1 }}
				/>
				<ListItemText primary={label || camelCaseToText(name)} />
			</ListItem>
		</Grid2>
	);
}
