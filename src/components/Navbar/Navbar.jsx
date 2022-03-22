import React from 'react';
import "./Navbar.css"
import {Link} from "react-router-dom";
const Navbar = () => {
  return (
    <>
    <nav className="nav-container">
			<div className="left-nav">
        <Link className="nav-heading" to={"/"}>SNKRS</Link>
				<span className="nav-subheading">Store</span>
			</div>

			<div className="search-div">
				<input className="search-input" type="text" placeholder="Search items" />
				<span className="material-icons search-icon">search</span>
			</div>

			<div className="right-nav">
				<div className="nav-link">
          <Link className="nav-heading" to={"/login"}>
						<button className="btn btn-primary-outlined login-btn">Login</button>
					</Link>
				</div>

				<div className="nav-link">
					<Link className="nav-heading" to={"/wishlist"}>
						<div className="badge-div">
							<div className="material-icons-outlined md-36">favorite</div>
							<span className="badge-icon">5</span>
						</div>
					</Link>
				</div>

				<div className="nav-link">
					<Link className="nav-heading" to={"/cart"}>
						<div className="badge-div">
							<div className="material-icons-outlined md-36">shopping_cart</div>
							<span className="badge-icon">3</span>
						</div>
					</Link>
				</div>
			</div>
		</nav>
    </>
  );
}

export default Navbar;
