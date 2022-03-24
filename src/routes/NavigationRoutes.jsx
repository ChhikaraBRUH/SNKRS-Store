import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/AuthPages/Login";
import Signup from "../pages/AuthPages/Signup";
import Logout from "../pages/AuthPages/Logout";
import Products from "../pages/Products/Products";
import Wishlist from "../pages/Wishlist/Wishlist";
import Cart from "../pages/Cart/Cart";
import Mockman from "mockman-js";
import { PrivateRoute } from "./PrivateRoute";

const NavigationRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/login' element={<Login />} />
			<Route path='/signup' element={<Signup />} />
			<Route path='/logout' element={<Logout />} />
			<Route path='/products' element={<Products />} />
			<Route
				path='/wishlist'
				element={
					<PrivateRoute>
						<Wishlist />
					</PrivateRoute>
				}
			/>
			<Route
				path='/cart'
				element={
					<PrivateRoute>
						<Cart />
					</PrivateRoute>
				}
			/>
			<Route path='/mockman' element={<Mockman />} />
		</Routes>
	);
};

export { NavigationRoutes };
