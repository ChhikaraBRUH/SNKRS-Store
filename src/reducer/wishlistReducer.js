const wishlistInitialState = {
	wishlist: [],
	totalItemsInWishlist: 0,
};

const wishlistReducer = (state, action) => {
	switch (action.type) {
		case "ADD_TO_WISHLIST":
			return { ...state, wishlist: action.payload, totalItemsInWishlist: state.totalItemsInWishlist + 1 };
		case "REMOVE_FROM_WISHLIST":
			return { ...state, wishlist: action.payload, totalItemsInWishlist: state.totalItemsInWishlist - 1 };

		case "GET_WISHLIST_STATE":
			return state;

		default:
			return state;
	}
};

export { wishlistReducer, wishlistInitialState };
