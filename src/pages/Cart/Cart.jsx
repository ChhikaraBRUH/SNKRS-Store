import React from "react";
import "./Cart.css";
import Navbar from "../../components/Navbar/Navbar";
import { AF1, AF2, AF3, AF4, RUN1, RUN2, RUN3, RUN4, SB1, SB2, SB3, SB4 } from "../../assets";

const Cart = () => {
	return (
		<>
			<Navbar />

			<section className='cart-section'>
				<div className='cart-items'>
					<h2>Your Cart Items</h2>
					<div className='cart-container'>
						<div className='card-container card-horizontal-container'>
							<div className='card-default'>
								<div className='card-header card-horizontal-header'>
									<div className='card-img-div'>
										<img src={RUN3} className='card-img card-horizontal-img' />
										<div className='card-dismiss-btn card-hidden-element material-icons-outlined'>favorite</div>
									</div>

									<div className='card-text-div card-horizontal-text-div'>
										<h3 className='card-title'>NIKE AF1 '07</h3>
										<div className='item-quantity'>
											<span className='material-icons'>remove_circle</span>
											<span>2</span>
											<span className='material-icons'>add_circle</span>
										</div>
										<p className='card-subtitle'>Price: $120</p>
									</div>
								</div>

								<div className='card-footer'>
									<button className='card-button'>
										<a href='#'>Remove From Cart</a>
									</button>
								</div>
							</div>
						</div>

						<div className='card-container card-horizontal-container'>
							<div className='card-default'>
								<div className='card-header card-horizontal-header'>
									<div className='card-img-div'>
										<img src={SB2} className='card-img card-horizontal-img' />
										<div className='card-dismiss-btn card-hidden-element material-icons-outlined'>favorite</div>
									</div>

									<div className='card-text-div card-horizontal-text-div'>
										<h3 className='card-title'>NIKE ZOOMX</h3>
										<div className='item-quantity'>
											<span className='material-icons'>remove_circle</span>
											<span>1</span>
											<span className='material-icons'>add_circle</span>
										</div>
										<p className='card-subtitle'>Price: $180</p>
									</div>
								</div>

								<div className='card-footer'>
									<button className='card-button'>
										<a href='#'>Remove From Cart</a>
									</button>
								</div>
							</div>
						</div>

						<div className='card-container card-horizontal-container'>
							<div className='card-default'>
								<div className='card-header card-horizontal-header'>
									<div className='card-img-div'>
										<img src={SB4} className='card-img card-horizontal-img' />
										<div className='card-dismiss-btn card-hidden-element material-icons-outlined'>favorite</div>
									</div>

									<div className='card-text-div card-horizontal-text-div'>
										<h3 className='card-title'>NIKE SB Blue</h3>
										<div className='item-quantity'>
											<span className='material-icons'>remove_circle</span>
											<span>3</span>
											<span className='material-icons'>add_circle</span>
										</div>
										<p className='card-subtitle'>Price: $90</p>
									</div>
								</div>

								<div className='card-footer'>
									<button className='card-button'>
										<a href='#'>Remove From Cart</a>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='cart-summary'>
					<h3>Order Summary</h3>
					<br />

					<div className='cart-summary-item'>
						<span>No. of Items:</span>
						<span>3</span>
					</div>
					<div className='cart-summary-item'>
						<span> Total Price: </span>
						<span> $390 </span>
					</div>
					<div className='cart-summary-item'>
						<span>Delivery Fee:</span>
						<span>Free</span>
					</div>
					<br />
					<a href='#'>
						<button className='btn btn-secondary'>Checkout</button>
					</a>
				</div>
			</section>
		</>
	);
};

export default Cart;
