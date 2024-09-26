import { Box, Typography } from '@mui/material';
import React from 'react'

export default function CardUnavailable() {
  return (
		<Box
			sx={{
				position: "absolute",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				width: "250px",
				height: "250px",
				borderRadius: "10px",
				background: "rgba(0, 0, 0, 0.6)",
				zIndex: 2,
			}}
		>
			<Typography sx={{ color: "#f22", fontSize: "2rem" }}>
				Unavailable
			</Typography>
		</Box>
  );
}
