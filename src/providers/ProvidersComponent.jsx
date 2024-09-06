import React from "react";
import CustomThemeProvider from "./CustomThemeProvider";

export default function ProvidersComponent({ children }) {
	return (
		<>
			<CustomThemeProvider>
        {children}
      </CustomThemeProvider>
		</>
	);
}
