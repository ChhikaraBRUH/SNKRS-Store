import React from "react";
import "./Cart.css";
import Navbar from "../../components/Navbar/Navbar";
import { useCart } from "../../context/cart/cartContext";
import { EmptyCart } from "./components/EmptyCart";
import { CartCard } from "./components/CartCard";

const Cart = () => {
	const { cartState } = useCart();
	return (
		<>
			<Navbar />

			{cartState.totalItemsInCart == 0 ? (
				<EmptyCart />
			) : (
				<section className='cart-section'>
					<div className='cart-items'>
						<h2>Your Cart Items</h2>
						<div className='cart-container'>
							{cartState.cart.map((product) => (
								<CartCard product={product} key={product._id} />
							))}
						</div>
					</div>
					<div className='cart-summary'>
						<h3>Order Summary</h3>
						<br />

						<div className='cart-summary-item'>
							<span>No. of Items:</span>
							<span>{cartState.totalItemsInCart}</span>
						</div>
						<div className='cart-summary-item'>
							<span> Total Price: </span>
							<span>Rs.{cartState.totalPrice}</span>
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
			)}
		</>
	);
};

export default Cart;
