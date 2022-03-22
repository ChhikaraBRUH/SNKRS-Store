import React from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";
import {products} from "../../../backend/db/products";

const ProductListing = () => {
  return(
    
    <section class="product-cards">
      {
        products.map(item=> <ProductCard title={item.title} categoryName={item.categoryName} price={item.price} img={item.img} inStock={item.inStock} />)
      }
			
		</section>
    
  );
}

export default ProductListing;