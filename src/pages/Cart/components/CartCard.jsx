import { useCart } from "../../../context/cart/cartContext";
import { useWishlist } from "../../../context/wishlist/wishlistContext";

const CartCard = ({ product }) => {
	const { addToCart, removeFromCart, changeCartQty, getCartState, cartState, isItemInCart } = useCart();

	const { addToWishlist, removeFromWishlist, isItemWishlisted } = useWishlist();
	const itemInWishlist = isItemWishlisted(product);

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
		<div className='card-container card-horizontal-container'>
			<div className='card-default'>
				<div className='card-header card-horizontal-header'>
					<div className='card-img-div'>
						<img src={product.img} className='card-img card-horizontal-img' />
						<div
							id={isItemWishlisted(product) ? "card-fav-icon-wishlisted" : "card-fav-icon-notWishlisted"}
							className='card-dismiss-btn material-icons-outlined'
							onClick={() => wishlistToggle(product)}>
							favorite
						</div>
					</div>

					<div className='card-text-div card-horizontal-text-div'>
						<h3 className='card-title'>{product.title}</h3>
						<div className='item-quantity'>
							<span
								className='material-icons'
								onClick={() => {
									if (product.qty == 1) {
										removeFromCart(product);
									} else {
										changeCartQty(product, { type: "decrement" });
									}
								}}>
								remove_circle
							</span>
							<span>{product.qty}</span>
							<span className='material-icons' onClick={() => changeCartQty(product, { type: "increment" })}>
								add_circle
							</span>
						</div>
						<p className='card-subtitle'>Price: Rs.{product.price}</p>
					</div>
				</div>

				<div className='card-footer'>
					<button className='card-button' onClick={() => removeFromCart(product)}>
						Remove From Cart
					</button>
				</div>
			</div>
		</div>
	);
};

export { CartCard };
