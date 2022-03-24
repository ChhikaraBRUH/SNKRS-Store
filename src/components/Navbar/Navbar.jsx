import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth/authContext";

const Navbar = () => {
	const { isAuth } = useAuth();

	return (
		<>
			<nav className='nav-container'>
				<div className='left-nav'>
					<Link className='nav-heading' to={"/"}>
						SNKRS
					</Link>
					<span className='nav-subheading'>Store</span>
				</div>

				<div className='search-div'>
					<input className='search-input' type='text' placeholder='Search items' />
					<span className='material-icons search-icon'>search</span>
				</div>

				<div className='right-nav'>
					<div className='nav-link'>
						{isAuth ? (
							<Link className='nav-heading' to={"/logout"}>
								<button className='btn btn-primary-outlined login-btn'>Logout</button>
							</Link>
						) : (
							<Link className='nav-heading' to={"/login"}>
								<button className='btn btn-primary-outlined login-btn'>Login</button>
							</Link>
						)}
					</div>

					<div className='nav-link'>
						<Link className='nav-heading' to={"/wishlist"}>
							<div className='badge-div'>
								<div className='material-icons-outlined md-36'>favorite</div>
								{isAuth ? <span className='badge-icon'>3</span> : null}
							</div>
						</Link>
					</div>

					<div className='nav-link'>
						<Link className='nav-heading' to={"/cart"}>
							<div className='badge-div'>
								<div className='material-icons-outlined md-36'>shopping_cart</div>
								{isAuth ? <span className='badge-icon'>3</span> : null}
							</div>
						</Link>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
