const filterInitialState = {
	sortBy: null,
	rating: "1",
	inStockOnly: false,
	airForce1: false,
	running: false,
	sb: false,
};

const filterReducer = (state, action) => {
	switch (action.type) {
		case "CLEAR_ALL":
			return filterInitialState;
		case "SORT":
			return { ...state, sortBy: action.payload };
		case "SHOW_IN_STOCK_ONLY":
			return { ...state, inStockOnly: !state.inStockOnly };
		case "RATING":
			return { ...state, rating: action.payload };
		case "AIR_FORCE_1":
			return { ...state, airForce1: !state.airForce1 };
		case "RUNNING":
			return { ...state, running: !state.running };
		case "SB":
			return { ...state, sb: !state.sb };
		default:
			return state;
	}
};

export { filterReducer, filterInitialState };
