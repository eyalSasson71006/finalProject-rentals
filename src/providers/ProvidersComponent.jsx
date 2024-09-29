import React from "react";
import CustomThemeProvider from "./CustomThemeProvider";
import UserProvider from "./UserProvider";
import SnackbarProvider from "./SnackbarProvider";
import { ChatProvider } from "./ChatProvider";

export default function ProvidersComponent({ children }) {
	return (
		<>
			<UserProvider>
				<ChatProvider>
					<SnackbarProvider>
						<CustomThemeProvider>{children}</CustomThemeProvider>
					</SnackbarProvider>
				</ChatProvider>
			</UserProvider>
		</>
	);
}
