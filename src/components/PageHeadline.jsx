import { Box, Divider, Typography } from '@mui/material';
import React from 'react'

export default function PageHeadline({title, subtitle}) {
  return (
		<Box sx={{my:4}}>
			<Typography
				sx={{ textAlign: "center" }}
				variant="h2"
				component="h1"
			>
				{title}
			</Typography>
			<Typography
				sx={{ textAlign: "center" }}
				variant="h5"
				component="h2"
			>
				{subtitle}
			</Typography>
			<Divider sx={{ my: 2 }} />
		</Box>
  );
}
