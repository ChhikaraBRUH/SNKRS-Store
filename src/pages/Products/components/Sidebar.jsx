import React from "react";

const Sidebar = () => {
  return(
    <>
    <button class="btn btn-link sidebar-toggle-btn" onclick="toggleFilters()">
        Show Filters
      </button>
			<aside>
				<div class="filters">
					<div class="filter-header">
						<div class="filter-title">Filters</div>
						<button class="filter-clear-btn">Clear</button>
					</div>

					<div class="filter-container">
						<div class="filter-container-title">Sort by price</div>
						<div class="filter-input-container">
							<input type="radio" name="price" id="priceLtoH" checked />
							<label for="priceLtoH">Price low to high</label>
						</div>
						<div class="filter-input-container">
							<input type="radio" name="price" id="HtoL" />
							<label for="priceHtoL">Price high to low</label>
						</div>
					</div>

					<div class="filter-container">
						<div class="filter-container-title">Sort by ratings</div>
						<input class="rating-range filter-container-inp" type="range" step="1" min="1" max="5" id="rating-range" />
						<div class="ratings">
							<span>1</span>
							<span>2</span>
							<span>3</span>
							<span>4</span>
							<span>5</span>
						</div>
					</div>

					<div class="filter-container">
						<div class="filter-container-title">Categories</div>
						<div class="filter-input-container">
							<input type="checkbox" id="AF1" />
							<label for="AF1">Air Force 1</label>
						</div>
						<div class="filter-input-container">
							<input type="checkbox" id="running" />
							<label for="running">Running</label>
						</div>
						<div class="filter-input-container">
							<input type="checkbox" id="skateboarding" />
							<label for="skateboarding">Skateboarding</label>
						</div>
					</div>

          <div class="apply-filter-btn">
            <button class="btn btn-secondary">Apply</button>
          </div>
				</div>
			</aside>
    </>
  )
}

export default Sidebar;