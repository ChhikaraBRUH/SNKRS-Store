import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./context/product/productsContext";
import { FilterProvider } from "./context/filter/filterContext";
import { AuthProvider } from "./context/auth/authContext";

// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<ProductsProvider>
					<FilterProvider>
						<App />
					</FilterProvider>
				</ProductsProvider>
			</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
