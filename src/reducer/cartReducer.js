const cartInitialState = {
	cart: [],
	totalItemsInCart: 0,
	totalPrice: 0,
};

const cartReducer = (state, action) => {
	switch (action.type) {
		case "ADD_TO_CART":
			return {
				...state,
				cart: [...action.payload],
				totalItemsInCart: action.payload.reduce((acc, curr) => acc + curr.qty, 0),
				totalPrice: action.payload.reduce((acc, curr) => Number(acc) + Number(curr.price) * curr.qty, 0),
			};

		case "UPDATE_CART":
			return {
				...state,
				cart: [...action.payload],
				totalItemsInCart: action.payload.reduce((acc, curr) => acc + curr.qty, 0),
				totalPrice: action.payload.reduce((acc, curr) => Number(acc) + Number(curr.price) * curr.qty, 0),
			};

		case "GET_CART_STATE":
			return state;

		default:
			return state;
	}
};

export { cartReducer, cartInitialState };
