import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import {
	useQuery,
	useMutation,
	useQueryClient,
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";

import { router } from "./router/Routes";
import AuthProviders from "./Providers/AuthProvider";
// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
	<AuthProviders>
		<HelmetProvider>
			<QueryClientProvider client={queryClient}>
				<React.StrictMode>
					<RouterProvider router={router} />
				</React.StrictMode>
			</QueryClientProvider>
		</HelmetProvider>
	</AuthProviders>
);
