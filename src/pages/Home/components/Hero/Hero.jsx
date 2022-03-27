import React from "react";
import "../../Home.css";
import { HERO_IMG } from "../../../../assets";
import { Link } from "react-router-dom";
import { useFilter } from "../../../../context/filter/filterContext";
const Hero = () => {
	const { filterDispatch } = useFilter();

	return (
		<>
			<section className='hero-section'>
				<div className='hero-text'>
					<h1>SNKRS STORE</h1>
					<p>GRAB YOURS RIGHT NOW</p>
					<Link to={"/products"}>
						<button className='btn btn-primary' onClick={() => filterDispatch({ type: "CLEAR_ALL" })}>
							SHOP NOW
						</button>
					</Link>
				</div>
				<div className='hero-img-div'>
					<img className='hero-img' src={HERO_IMG} alt='Nike Sneaker Hero Image' />
				</div>
			</section>
		</>
	);
};

export default Hero;
