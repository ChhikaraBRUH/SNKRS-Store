import React from 'react';
import '../../Home.css';
import { HERO_IMG } from '../../../../assets';
const Hero = () => {
  return (
    <>
    <section className="hero-section">
			<div className="hero-text">
				<h1>SNKRS STORE</h1>
				<p>GRAB YOURS RIGHT NOW</p>
			</div>
			<div className="hero-img-div"><img className="hero-img" src={HERO_IMG} alt="Nike Sneaker Hero Image" /></div>
		</section>
    </>
  );
}

export default Hero;
