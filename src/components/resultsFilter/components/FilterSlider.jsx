import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useSearchParams } from "react-router-dom";

function valuetext(value) {
	return `${value.toLocaleString("en-US")} $`;
}

export default function FilterSlider({ minValue, maxValue }) {
	const [searchParams, setSearchParams] = useSearchParams();
	const [value, setValue] = useState([
		parseInt(searchParams.get("minPrice")) || minValue,
		parseInt(searchParams.get("maxPrice")) || maxValue,
	]);

	const handleChangeCommitted = (e, newValue) => {
		setSearchParams((prev) => {
			const newParams = new URLSearchParams(prev);
			newParams.set("minPrice", newValue[0].toString());
			newParams.set("maxPrice", newValue[1].toString());
			return newParams;
		});
	};

	const handleChange = (e, newValue, activeThumb) => {
		if (!Array.isArray(newValue)) {
			return;
		}
		if (activeThumb === 0) {
			setValue([Math.min(newValue[0], value[1] - 100), value[1]]);
		} else {
			setValue([value[0], Math.max(newValue[1], value[0] + 100)]);
		}
	};

	return (
		<Box sx={{ width: 300 }} mt={3} mx={3}>
			<Slider
				getAriaLabel={() => "Minimum"}
				value={value}
				min={minValue}
				max={maxValue}
				onChange={handleChange}
				onChangeCommitted={handleChangeCommitted}
				valueLabelDisplay="on"
				getAriaValueText={valuetext}
				valueLabelFormat={valuetext}
				disableSwap
			/>
		</Box>
	);
}
