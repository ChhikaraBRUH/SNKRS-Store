import React, { useState } from "react";
import { useFilter } from "../../../context/filter/filterContext";

const Sidebar = () => {
	const { filterState, filterDispatch } = useFilter();
	const [mobileFilters, setMobileFilters] = useState(false);

	return (
		<>
			<button className='btn sidebar-toggle-btn' onClick={() => setMobileFilters((prev) => !prev)}>
				{mobileFilters ? "Hide Filters" : "Show Filters"}
			</button>

			{mobileFilters && (
				<section className='mobile-filters'>
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
								<label htmlFor='priceLtoH'>Price low to high</label>
							</div>
							<div className='filter-input-container'>
								<input
									type='radio'
									name='price'
									id='priceHtoL'
									checked={filterState.sortBy && filterState.sortBy === "HIGH_TO_LOW"}
									onClick={() => filterDispatch({ type: "SORT", payload: "HIGH_TO_LOW" })}
								/>
								<label htmlFor='priceHtoL'>Price high to low</label>
							</div>

							<div className='filter-container-title'>Out of Stock</div>
							<div className='filter-input-container'>
								<input
									type='checkbox'
									id='outOfStock'
									checked={filterState.inStockOnly === false}
									onChange={() => filterDispatch({ type: "SHOW_IN_STOCK_ONLY" })}
								/>
								<label htmlFor='outOfStock'>Show Out of Stock</label>
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
									onChange={() => filterDispatch({ type: "AIR_FORCE_1" })}
								/>
								<label htmlFor='AF1'>Air Force 1</label>
							</div>
							<div className='filter-input-container'>
								<input
									type='checkbox'
									id='running'
									checked={filterState.running === true}
									onChange={() => filterDispatch({ type: "RUNNING" })}
								/>
								<label htmlFor='running'>Running</label>
							</div>
							<div className='filter-input-container'>
								<input type='checkbox' id='sb' checked={filterState.sb === true} onChange={() => filterDispatch({ type: "SB" })} />
								<label htmlFor='sb'>SB</label>
							</div>
						</div>
					</div>
				</section>
			)}

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
							<label htmlFor='priceLtoH'>Price low to high</label>
						</div>
						<div className='filter-input-container'>
							<input
								type='radio'
								name='price'
								id='priceHtoL'
								checked={filterState.sortBy && filterState.sortBy === "HIGH_TO_LOW"}
								onClick={() => filterDispatch({ type: "SORT", payload: "HIGH_TO_LOW" })}
							/>
							<label htmlFor='priceHtoL'>Price high to low</label>
						</div>

						<div className='filter-container-title'>Out of Stock</div>
						<div className='filter-input-container'>
							<input
								type='checkbox'
								id='outOfStock'
								checked={filterState.inStockOnly === false}
								onChange={() => filterDispatch({ type: "SHOW_IN_STOCK_ONLY" })}
							/>
							<label htmlFor='outOfStock'>Show Out of Stock</label>
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
								onChange={() => filterDispatch({ type: "AIR_FORCE_1" })}
							/>
							<label htmlFor='AF1'>Air Force 1</label>
						</div>
						<div className='filter-input-container'>
							<input
								type='checkbox'
								id='running'
								checked={filterState.running === true}
								onChange={() => filterDispatch({ type: "RUNNING" })}
							/>
							<label htmlFor='running'>Running</label>
						</div>
						<div className='filter-input-container'>
							<input type='checkbox' id='sb' checked={filterState.sb === true} onChange={() => filterDispatch({ type: "SB" })} />
							<label htmlFor='sb'>SB</label>
						</div>
					</div>
				</div>
			</aside>
		</>
	);
};

export default Sidebar;
