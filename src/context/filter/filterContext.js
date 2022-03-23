import { createContext, useContext, useReducer } from "react";
import { filterInitialState, filterReducer } from "../../reducer/filterReducer";

const FilterContext = createContext(null);

const FilterProvider = ({ children }) => {
	const [filterState, filterDispatch] = useReducer(filterReducer, filterInitialState);
	return <FilterContext.Provider value={{ filterState, filterDispatch }}>{children}</FilterContext.Provider>;
};

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };
