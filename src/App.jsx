import "./index.css";
import Layout from "./layout/Layout";
import ProvidersComponent from "./providers/ProvidersComponent";
import Router from "./routes/Router";
import { BrowserRouter } from "react-router-dom";

function App() {
	return (
		<>
			<BrowserRouter>
				<ProvidersComponent>
					<Layout>
						<Router />
					</Layout>
				</ProvidersComponent>
			</BrowserRouter>
		</>
	);
}

export default App;
