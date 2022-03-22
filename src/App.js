import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/AuthPages/Login";
import Signup from "./pages/AuthPages/Signup";
import Products from "./pages/Products/Products";
import Mockman from "mockman-js";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/products" element={<Products />} />
				<Route path="/mockman" element={<Mockman />} />
			</Routes>
		</div>
	);
}

export default App;
