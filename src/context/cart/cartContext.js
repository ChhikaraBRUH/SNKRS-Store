import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { cartInitialState, cartReducer } from "../../reducer/cartReducer";
import { useAuth } from "../auth/authContext";

const CartContext = createContext(cartInitialState);

const getCartContextValue = () => {
	const [cartState, cartDispatch] = useReducer(cartReducer, cartInitialState);
	let { token } = useAuth();

	const isItemInCart = (product) => cartState.cart.find((item) => item._id === product._id);

	const addToCart = async (product) => {
		try {
			let response = await axios.post("/api/user/cart", { product }, { headers: { authorization: token } });
			cartDispatch({ type: "ADD_TO_CART", payload: response.data.cart });
			return response.status;
		} catch (err) {
			console.error(err);
		}
	};

	const removeFromCart = async (product) => {
		try {
			let response = await axios.delete(`api/user/cart/${product._id}`, { headers: { authorization: token } });
			cartDispatch({ type: "UPDATE_CART", payload: response.data.cart });
		} catch (err) {
			console.error(err);
		}
	};

	const changeCartQty = async (product, action) => {
		try {
			let response = await axios.post(`api/user/cart/${product._id}`, { action }, { headers: { authorization: token } });
			cartDispatch({ type: "UPDATE_CART", payload: response.data.cart });
			console.log(cartState);
		} catch (err) {
			console.error(err);
		}
	};

	const getCartState = async () => {
		try {
			let response = await axios.get("/api/user/cart", { headers: { authorization: token } });
			cartDispatch({ type: "GET_CART_STATE", payload: response.data.cart });
		} catch (err) {
			console.error(err);
		}
	};

	return { addToCart, removeFromCart, changeCartQty, getCartState, cartState, isItemInCart };
};

const CartProvider = ({ children }) => {
	const value = getCartContextValue();
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
