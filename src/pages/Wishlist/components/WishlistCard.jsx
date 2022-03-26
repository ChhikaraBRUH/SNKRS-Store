import { useNavigate } from "react-router-dom";
import { useCart } from "../../../context/cart/cartContext";
import { useWishlist } from "../../../context/wishlist/wishlistContext";

const WishlistCard = ({ product }) => {
	const { addToWishlist, removeFromWishlist, isItemWishlisted } = useWishlist();
	const { addToCart, removeFromCart, changeCartQty, getCartState, cartState, isItemInCart } = useCart();

	const itemInWishlist = isItemWishlisted(product);
	const itemInCart = isItemInCart(product);

	const navigate = useNavigate();

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
		<div className='card-container'>
			<div className='card-default'>
				<div className='card-header'>
					{itemInCart ? <div className='card-label'>ADDED TO CART</div> : null}

					<div
						id={itemInWishlist ? "card-fav-icon-wishlisted" : "card-fav-icon-notWishlisted"}
						className='card-dismiss-btn material-icons-outlined'
						onClick={() => wishlistToggle(product)}>
						favorite
					</div>
					<div className={`card-img-div` + (product.inStock ? "" : " card-out-of-stock-img-div")}>
						{!product.inStock && <div className='card-out-of-stock-text'>OUT OF STOCK</div>}
						<img src={product.img} className='card-img' />
					</div>

					<div className='card-text-div'>
						<h3 className='card-title'>{product.title}</h3>
						<h4 className='card-subtitle'>
							{product.categoryName} | Rating: {product.rating}/5
						</h4>
					</div>
				</div>

				<div className='card-footer'>
					<h4>Price: Rs.{product.price}</h4>
					<button
						id={product.inStock ? null : "out-of-stock-card-button"}
						className='card-button'
						onClick={product.inStock ? (itemInCart ? () => navigate("/cart") : () => addToCart(product)) : null}>
						{product.inStock ? (itemInCart ? "Go To Cart" : "Add To Cart") : "Out Of Stock"}
					</button>
				</div>
			</div>
		</div>
	);
};

export { WishlistCard };
