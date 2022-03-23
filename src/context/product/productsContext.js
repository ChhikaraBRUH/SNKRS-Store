import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const ProductsContext = createContext(null);

const ProductsProvider = ({ children }) => {
	const [products, setProducts] = useState([]);

	const getProducts = async () => {
		try {
			const response = await axios.get("api/products");
			setProducts(response.data.products);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		getProducts();
	}, []);

	return <ProductsContext.Provider value={products}>{children}</ProductsContext.Provider>;
};

const useProducts = () => useContext(ProductsContext);

export { useProducts, ProductsProvider };
