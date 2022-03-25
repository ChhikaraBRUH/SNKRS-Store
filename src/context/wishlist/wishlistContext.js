import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { wishlistInitialState, wishlistReducer } from "../../reducer/wishlistReducer";
import { useAuth } from "../auth/authContext";

const WishlistContext = createContext(wishlistInitialState);

const getWishlistContextValue = () => {
	const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, wishlistInitialState);
	let { token } = useAuth();

	const isItemWishlisted = (product) => wishlistState.wishlist.find((item) => item._id === product._id);

	const addToWishlist = async (product) => {
		try {
			let response = await axios.post("api/user/wishlist", { product }, { headers: { authorization: token } });
			if (response.status === 201) {
				wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: response.data.wishlist });
			}
		} catch (err) {
			console.error(err);
		}
	};

	const removeFromWishlist = async (product) => {
		try {
			let response = await axios.delete(`api/user/wishlist/${product._id}`, { headers: { authorization: token } });
			if (response.status === 200) {
				wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: response.data.wishlist });
			}
		} catch (err) {
			console.error(err);
		}
	};

	return { addToWishlist, removeFromWishlist, wishlistState, wishlistDispatch, isItemWishlisted };
};

const WishlistProvider = ({ children }) => {
	const value = getWishlistContextValue();
	return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
