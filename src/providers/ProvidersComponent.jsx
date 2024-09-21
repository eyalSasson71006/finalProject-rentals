import React from "react";
import CustomThemeProvider from "./CustomThemeProvider";
import UserProvider from "./UserProvider";
import SnackbarProvider from "./SnackbarProvider";

export default function ProvidersComponent({ children }) {
	return (
		<>
			<UserProvider>
				<SnackbarProvider>
					<CustomThemeProvider>
						{children}
					</CustomThemeProvider>
				</SnackbarProvider>
			</UserProvider>
		</>
	);
}
