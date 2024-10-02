import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useSearchParams } from "react-router-dom";
import { titleCase } from "../../../helpers/helperFunctions";

export default function FilterNumberInput({ name, value = 0 }) {
	const [searchParams, setSearchParams] = useSearchParams();
	const [amount, setAmount] = useState(Number(searchParams.get(name)) || value || 0);
	const { palette } = useTheme();

	useEffect(() => {
		setSearchParams((prev) => {
			const newParams = new URLSearchParams(prev);
			newParams.set(name, amount);
			return newParams;
		});
	}, [amount]);

	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
                my: 2,
			}}
		>
			<Typography>{titleCase(name)}</Typography>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					border: `1px solid ${palette.primary.main}`,
					borderRadius: "10px",
					gap: 1,
				}}
			>
				<IconButton
					onClick={() => setAmount((p) => p - 1)}
					disabled={amount <= 0}
				>
					<RemoveIcon color={amount > 0 ? "primary" : "gray"} />
				</IconButton>
				<Divider orientation="vertical" variant="middle" flexItem />
				<Typography>{amount > 0 ? amount + "+" : "Any"}</Typography>
				<Divider orientation="vertical" variant="middle" flexItem />
				<IconButton onClick={() => setAmount((p) => p + 1)}>
					<AddIcon color="primary" />
				</IconButton>
			</Box>
		</Box>
	);
}
