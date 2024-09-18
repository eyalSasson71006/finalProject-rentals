import React from "react";
import CustomThemeProvider from "./CustomThemeProvider";
import UserProvider from "./UserProvider";

export default function ProvidersComponent({ children }) {
	return (
		<>
			<UserProvider>
				<CustomThemeProvider>
					{children}
				</CustomThemeProvider>
			</UserProvider>
		</>
	);
}
