import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export default function CustomThemeProvider({ children }) {
	const [isDark, setIsDark] = useState(false);

	const theme = createTheme({
		palette: {
			primary: {
				main: isDark ? "#586c5a" : "#708871",
			},
			background: {
				default: isDark ? "#2a2a2a" : "#f5f5f5",
			},
			mode: isDark ? "dark" : "light",
		},
	});

	return (
		<ThemeContext.Provider value={{ isDark, setIsDark }}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</ThemeContext.Provider>
	);
}

export const useIsDark = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useIsDark must be used within provider");
	}
	return context;
};
