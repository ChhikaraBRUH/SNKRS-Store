import { Link } from "react-router-dom";

const EmptyWishlist = () => {
	return (
		<>
			<section className='wishlist-section'>
				<h2>Your Wishlist Is Empty!</h2>

				<div className='wishlist-container'>
					<div className='card-container'>
						<div className='card-default'>
							<div className='card-header'>
								<div className='card-text-div'>
									<h3 className='card-title'></h3>
									<h4 className='card-subtitle'>See Product Listings to add products to the wishlist.</h4>
								</div>
							</div>

							<div className='card-footer'>
								<Link to='/products'>
									<button className='card-button'>See Products</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export { EmptyWishlist };
