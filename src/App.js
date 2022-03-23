import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/AuthPages/Login";
import Signup from "./pages/AuthPages/Signup";
import Products from "./pages/Products/Products";
import Wishlist from "./pages/Wishlist/Wishlist";
import Cart from "./pages/Cart/Cart";
import Mockman from "mockman-js";

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='/products' element={<Products />} />
				<Route path='/wishlist' element={<Wishlist />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/mockman' element={<Mockman />} />
			</Routes>
		</div>
	);
}

export default App;
