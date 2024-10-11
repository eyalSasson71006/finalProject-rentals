import React from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import useActivityTimeout from "../hooks/useActivityTimeout";
import useUsers from "../hooks/useUsers";

export default function Layout({ children }) {
	const { handleLogout } = useUsers();
	useActivityTimeout(handleLogout);
	return (
		<>
			<Header />
			<Main>{children}</Main>
			<Footer />
		</>
	);
}
