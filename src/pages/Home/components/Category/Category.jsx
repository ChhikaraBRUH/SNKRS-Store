import React from 'react';
import "./Category.css"
import { Link } from 'react-router-dom';
import '../../Home.css';
import {AF1, RUN1, SB1} from "../../../../assets"

const Category = () => {
  return (
    <>
    <section className="categories-section">
			<h2>Featured Categories</h2>

			<div className="categories-container">
				<div className="card-container">
					<div className="card-default">
						<div className="card-header">
							<div className="card-label">HOT</div>

							<div className="card-img-div">
								<img src={AF1} className="card-img" />
							</div>

							<div className="card-text-div">
								<h3 className="card-title">Air Force 1</h3>
							</div>
						</div>

						<div className="card-middle">
							<p className="card-description">Air Force 1's are the classic Nike Shoes.</p>
						</div>

						<div className="card-footer">
							<Link to={"/products"}><button className="card-button">Check It Out</button></Link>
						</div>
					</div>
				</div>

				<div className="card-container">
					<div className="card-default">
						<div className="card-header">
							<div className="card-label">ON SALE</div>

							<div className="card-img-div">
								<img src={RUN1} className="card-img" />
							</div>

							<div className="card-text-div">
								<h3 className="card-title">Running Shoes</h3>
							</div>
						</div>

						<div className="card-middle">
							<p className="card-description">We have an amazing collection of Running Shoes.</p>
						</div>

						<div className="card-footer">
							<Link to={"/products"}><button className="card-button">Check It Out</button></Link>
						</div>
					</div>
				</div>

				<div className="card-container">
					<div className="card-default">
						<div className="card-header">
							<div className="card-label">NEW</div>

							<div className="card-img-div">
								<img src={SB1} className="card-img" />
							</div>

							<div className="card-text-div">
								<h3 className="card-title">SB Shoes</h3>
							</div>
						</div>

						<div className="card-middle">
							<p className="card-description">Love Skateboarding? We got you covered!</p>
						</div>

						<div className="card-footer">
						  <Link to={"/products"}><button className="card-button">Check It Out</button></Link>
						</div>
					</div>
				</div>
			</div>
		</section>
    </>
  );
}

export default Category;
