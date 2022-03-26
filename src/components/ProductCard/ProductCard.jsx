import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth/authContext";
import { useCart } from "../../context/cart/cartContext";
import { useWishlist } from "../../context/wishlist/wishlistContext";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
	const { _id, title, categoryName, price, img, inStock, rating } = product;

	const { addToWishlist, removeFromWishlist, isItemWishlisted } = useWishlist();

	const { addToCart, isItemInCart } = useCart();

	const { isAuth } = useAuth();
	const navigate = useNavigate();
	const itemInWishlist = isItemWishlisted(product);
	const itemInCart = isItemInCart(product);

	const wishlistToggle = async (product) => {
		try {
			if (!itemInWishlist) {
				await addToWishlist(product);
			} else {
				await removeFromWishlist(product);
			}
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className='card-container' key={_id}>
			<div className='card-default'>
				<div className='card-header'>
					{itemInWishlist && <div className='card-label'>ADDED TO WISHLIST</div>}
					<div
						id={itemInWishlist ? "card-fav-icon-wishlisted" : "card-fav-icon-notWishlisted"}
						className='card-dismiss-btn material-icons-outlined'
						onClick={() => (isAuth ? wishlistToggle(product) : navigate("/login"))}>
						favorite
					</div>
					<div className={`card-img-div` + (inStock ? "" : " card-out-of-stock-img-div")}>
						{!inStock && <div className='card-out-of-stock-text'>OUT OF STOCK</div>}
						<img src={img} className='card-img' />
					</div>

					<div className='card-text-div'>
						<h3 className='card-title'>{title}</h3>
						<p className='card-subtitle'>
							{categoryName} | Rating: ({rating}/5)
						</p>
					</div>
				</div>

				<div className='card-footer'>
					<div className='price'>Price: Rs.{price}</div>

					<button
						id={inStock ? null : "out-of-stock-card-button"}
						className='card-button'
						onClick={inStock ? (itemInCart ? () => navigate("/cart") : () => addToCart(product)) : null}>
						{inStock ? (itemInCart ? "Go To Cart" : "Add To Cart") : "Out Of Stock"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
