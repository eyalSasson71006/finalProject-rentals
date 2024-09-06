import SearchResults from "./pages/SearchResults";
import "./index.css";
import Layout from "./layout/Layout";
import SearchPage from "./pages/SearchPage";
import ProvidersComponent from "./providers/ProvidersComponent";

function App() {
	return (
		<>
			<ProvidersComponent>
				<Layout>
					{/* <SearchResults /> */}
					<SearchPage />
				</Layout>
			</ProvidersComponent>
		</>
	);
}

export default App;
