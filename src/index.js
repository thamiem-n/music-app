import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ArtistProvider } from "./Components/ArtistContext";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Router>
		<ArtistProvider>
			<App />
		</ArtistProvider>
	</Router>
);
