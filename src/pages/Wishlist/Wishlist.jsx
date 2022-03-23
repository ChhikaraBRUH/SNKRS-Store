import React from "react";
import "./Wishlist.css";
import Navbar from "../../components/Navbar/Navbar";
import { AF1, AF2, AF3, AF4, RUN1, RUN2, RUN3, RUN4, SB1, SB2, SB3, SB4 } from "../../assets";

const Wishlist = () => {
	return (
		<>
			<Navbar />

			<section className='wishlist-section'>
				<h2>Your Wishlist</h2>

				<div className='wishlist-container'>
					<div className='card-container'>
						<div className='card-default'>
							<div className='card-header'>
								<div className='card-dismiss-btn material-icons-outlined'>favorite</div>
								<div className='card-img-div'>
									<img src={RUN3} className='card-img' />
								</div>

								<div className='card-text-div'>
									<h3 className='card-title'>Nike Air Zoom</h3>
									<h4 className='card-subtitle'>Running Shoes</h4>
								</div>
							</div>

							<div className='card-footer'>
								<h4>Price: $149</h4>
								<button className='card-button'>
									<a href='#'>Move To Cart</a>
								</button>
							</div>
						</div>
					</div>

					<div className='card-container'>
						<div className='card-default'>
							<div className='card-header'>
								<div className='card-dismiss-btn material-icons-outlined'>favorite</div>
								<div className='card-img-div'>
									<img src={RUN2} className='card-img' />
								</div>

								<div className='card-text-div'>
									<h3 className='card-title'>Nike Air ZoomX</h3>
									<h4 className='card-subtitle'>Running Shoes</h4>
								</div>
							</div>

							<div className='card-footer'>
								<h4>Price: $129</h4>
								<button className='card-button'>
									<a href='#'>Move To Cart</a>
								</button>
							</div>
						</div>
					</div>

					<div className='card-container'>
						<div className='card-default'>
							<div className='card-header'>
								<div className='card-dismiss-btn material-icons-outlined'>favorite</div>
								<div className='card-img-div'>
									<img src={AF3} className='card-img' />
								</div>

								<div className='card-text-div'>
									<h3 className='card-title'>Nike AF1 '07</h3>
									<h4 className='card-subtitle'>Air Force Shoes</h4>
								</div>
							</div>

							<div className='card-footer'>
								<h4>Price: $279</h4>
								<button className='card-button'>
									<a href='#'>Move To Cart</a>
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Wishlist;
