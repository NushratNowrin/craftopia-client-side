import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import { router } from "./router/Routes";
import AuthProviders from "./Providers/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
	<AuthProviders>
		<HelmetProvider>
			<React.StrictMode>
				<RouterProvider router={router} />
			</React.StrictMode>
		</HelmetProvider>
	</AuthProviders>
);
