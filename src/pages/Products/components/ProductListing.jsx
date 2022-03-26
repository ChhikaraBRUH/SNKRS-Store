import React from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";
import { useFilter } from "../../../context/filter/filterContext";
import { useProducts } from "../../../context/product/productsContext";

const ProductListing = () => {
	const { filterState } = useFilter();
	const products = useProducts();

	const getCategorisedProducts = (data, { airForce1, running, sb }) => {
		let categorisedList = [];
		if (airForce1 === false && running === false && sb === false) {
			categorisedList = [...data];
		}
		if (airForce1) {
			categorisedList = categorisedList.concat(data.filter((item) => item.categoryName === "Air Force 1"));
		}
		if (running) {
			categorisedList = categorisedList.concat(data.filter((item) => item.categoryName === "Running"));
		}
		if (sb) {
			categorisedList = categorisedList.concat(data.filter((item) => item.categoryName === "SB"));
		}
		return categorisedList;
	};

	const getSortedProducts = (data, { sortBy }) => {
		if (sortBy && sortBy === "LOW_TO_HIGH") {
			return data.sort((a, b) => a.price - b.price);
		}
		if (sortBy && sortBy === "HIGH_TO_LOW") {
			return data.sort((a, b) => b.price - a.price);
		}
		return data;
	};

	const getFilteredProducts = (data, filterBy) => {
		return data
			.filter((item) => (filterBy.inStockOnly ? item.inStock : true))
			.filter((item) => (filterBy.rating <= item.rating ? true : false));
	};

	const categorisedProducts = getCategorisedProducts(products, filterState);

	const sortedProducts = getSortedProducts(categorisedProducts, filterState);

	const filteredProducts = getFilteredProducts(sortedProducts, filterState);

	return (
		<section className='product-cards'>
			{filteredProducts.map((product) => (
				<ProductCard product={product} key={product._id} />
			))}
		</section>
	);
};

export default ProductListing;
