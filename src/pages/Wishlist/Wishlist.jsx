import React from "react";
import "./Wishlist.css";
import Navbar from "../../components/Navbar/Navbar";
import { useWishlist } from "../../context/wishlist/wishlistContext";
import { EmptyWishlist } from "./components/EmptyWishlist";
import { WishlistCard } from "./components/WishlistCard";

const Wishlist = () => {
	const { wishlistState } = useWishlist();

	return (
		<>
			<Navbar />

			{wishlistState.totalItemsInWishlist == 0 ? (
				<EmptyWishlist />
			) : (
				<section className='wishlist-section'>
					<h2>Your Wishlist</h2>

					<div className='wishlist-container'>
						{wishlistState.wishlist.map((product) => (
							<WishlistCard product={product} key={product._id} />
						))}
					</div>
				</section>
			)}
		</>
	);
};

export default Wishlist;
