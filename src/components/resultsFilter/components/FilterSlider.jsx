import React, { useEffect, useState } from "react";
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

    useEffect(() => {
		setSearchParams((prev) => {
			const newParams = new URLSearchParams(prev);
			newParams.set("minPrice", value[0].toString());
			newParams.set("maxPrice", value[1].toString());
			return newParams;
		});
	}, [value]);

	const handleChange = (e, newValue, activeThumb) => {
		if (!Array.isArray(newValue)) {
			return;
		}
		if (activeThumb === 0) {
			setValue([Math.min(newValue[0], value[1] - minValue), value[1]]);
		} else {
			setValue([value[0], Math.max(newValue[1], value[0] + minValue)]);
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
				valueLabelDisplay="on"
				getAriaValueText={valuetext}
				valueLabelFormat={valuetext}
				disableSwap
			/>
		</Box>
	);
}
