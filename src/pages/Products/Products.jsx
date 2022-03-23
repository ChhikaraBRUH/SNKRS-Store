import React from "react";
import "./Products.css";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "./components/Sidebar";
import ProductListing from "./components/ProductListing";

function Products() {
	return (
		<>
			<Navbar />
			<Sidebar />
			<ProductListing />
		</>
	);
}

export default Products;
