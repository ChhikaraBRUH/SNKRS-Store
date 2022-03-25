import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./context/product/productsContext";
import { FilterProvider } from "./context/filter/filterContext";
import { AuthProvider } from "./context/auth/authContext";
import { WishlistProvider } from "./context/wishlist/wishlistContext";

// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<WishlistProvider>
					<ProductsProvider>
						<FilterProvider>
							<App />
						</FilterProvider>
					</ProductsProvider>
				</WishlistProvider>
			</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
