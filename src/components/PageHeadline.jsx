import { Box, Typography } from '@mui/material';
import React from 'react'

export default function PageHeadline({title, subtitle, children}) {
  return (
		<Box
			sx={{
				padding: "40px",
				color: "white",
				textAlign: "center",
				backgroundColor: "#8b8b8b",
			}}
		>
			<Typography variant="h4">{title}</Typography>
			<Typography variant="h5">{subtitle}</Typography>
			{children}
		</Box>
  );
}
