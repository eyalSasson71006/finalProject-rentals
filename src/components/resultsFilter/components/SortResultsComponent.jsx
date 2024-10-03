import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { titleCase } from "../../../helpers/helperFunctions";

export default function SortResultsComponent({
	name,
	value = "Any",
	label,
	keys = [],
}) {
	const [searchParams, setSearchParams] = useSearchParams();
	const [sortBy, setSortBy] = useState(
		searchParams.get(name) || value || "Any"
	);
	const [order, setOrder] = useState(searchParams.get("order") || 1);

	useEffect(() => {
		setSearchParams((prev) => {
			const newParams = new URLSearchParams(prev);
			newParams.set(name, sortBy);
			newParams.set("order", order);
			return newParams;
		});
	}, [sortBy, order]);
	return (
		<Box sx={{ display: "flex", gap: 1 }}>
			<FormControl
				sx={{
					minWidth: "200px",
				}}
			>
				<InputLabel id={name}>{label}</InputLabel>
				<Select
					labelId={name}
					id={name}
					name={name}
					label={label}
					value={sortBy}
					onChange={(e) => setSortBy(e.target.value)}
				>
					{keys.map((item, index) => (
						<MenuItem key={item + index} value={item}>
							{titleCase(item)}
						</MenuItem>
					))}
				</Select>
			</FormControl>
			<FormControl
				sx={{
					minWidth: "100px",
				}}
			>
				<Select
					labelId={"order"}
					id={"order"}
					name={"order"}
					label={label}
					value={order}
					onChange={(e) => setOrder(e.target.value)}
				>
					{[1, -1].map((item, index) => (
						<MenuItem key={item + index} value={item}>
							{item == -1
								? "High to Low"
								: item == 1
								? "Low to High"
								: ""}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	);
}
