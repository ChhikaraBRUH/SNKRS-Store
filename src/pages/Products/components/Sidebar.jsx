import React from "react";
import { useFilter } from "../../../context/filter/filterContext";

const Sidebar = () => {
	const { filterState, filterDispatch } = useFilter();

	return (
		<>
			<button className='btn btn-link sidebar-toggle-btn' onclick='toggleFilters()'>
				Show Filters
			</button>
			<aside>
				<div className='filters'>
					<div className='filter-header'>
						<div className='filter-title'>Filters</div>
						<button className='filter-clear-btn' onClick={() => filterDispatch({ type: "CLEAR_ALL" })}>
							Clear
						</button>
					</div>

					<div className='filter-container'>
						<div className='filter-container-title'>Sort by price</div>
						<div className='filter-input-container'>
							<input
								type='radio'
								name='price'
								id='priceLtoH'
								checked={filterState.sortBy && filterState.sortBy === "LOW_TO_HIGH"}
								onClick={() => filterDispatch({ type: "SORT", payload: "LOW_TO_HIGH" })}
							/>
							<label for='priceLtoH'>Price low to high</label>
						</div>
						<div className='filter-input-container'>
							<input
								type='radio'
								name='price'
								id='priceHtoL'
								checked={filterState.sortBy && filterState.sortBy === "HIGH_TO_LOW"}
								onClick={() => filterDispatch({ type: "SORT", payload: "HIGH_TO_LOW" })}
							/>
							<label for='priceHtoL'>Price high to low</label>
						</div>

						<div className='filter-container-title'>Out of Stock</div>
						<div className='filter-input-container'>
							<input
								type='checkbox'
								id='outOfStock'
								checked={filterState.inStockOnly === false}
								onClick={() => filterDispatch({ type: "SHOW_IN_STOCK_ONLY" })}
							/>
							<label for='outOfStock'>Show Out of Stock</label>
						</div>
					</div>

					<div className='filter-container'>
						<div className='filter-container-title'>Sort by ratings</div>
						<input
							className='rating-range filter-container-inp'
							type='range'
							step='1'
							min='1'
							max='5'
							defaultValue='1'
							value={filterState.rating}
							id='rating-range'
							onChange={(e) =>
								filterDispatch({
									type: "RATING",
									payload: Number(e.currentTarget.value),
								})
							}
						/>
						<div className='ratings'>
							<span>1</span>
							<span>2</span>
							<span>3</span>
							<span>4</span>
							<span>5</span>
						</div>
					</div>

					<div className='filter-container'>
						<div className='filter-container-title'>Categories</div>
						<div className='filter-input-container'>
							<input
								type='checkbox'
								id='AF1'
								checked={filterState.airForce1 === true}
								onClick={() => filterDispatch({ type: "AIR_FORCE_1" })}
							/>
							<label for='AF1'>Air Force 1</label>
						</div>
						<div className='filter-input-container'>
							<input
								type='checkbox'
								id='running'
								checked={filterState.running === true}
								onClick={() => filterDispatch({ type: "RUNNING" })}
							/>
							<label for='running'>Running</label>
						</div>
						<div className='filter-input-container'>
							<input type='checkbox' id='sb' checked={filterState.sb === true} onClick={() => filterDispatch({ type: "SB" })} />
							<label for='sb'>SB</label>
						</div>
					</div>
				</div>
			</aside>
		</>
	);
};

export default Sidebar;
