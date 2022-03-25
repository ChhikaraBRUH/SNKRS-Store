import { useWishlist } from "../../../context/wishlist/wishlistContext";

const WishlistCard = ({ product }) => {
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
		<div className='card-container'>
			<div className='card-default'>
				<div className='card-header'>
					<div className='card-label'>IN WISHLIST</div>
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
					<a href='#'>
						<button id={product.inStock ? null : "out-of-stock-card-button"} className='card-button'>
							{product.inStock ? "Add To Cart" : "Out Of Stock"}
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export { WishlistCard };
