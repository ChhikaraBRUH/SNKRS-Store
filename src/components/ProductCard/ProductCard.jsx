import React from "react";
import "./ProductCard.css"

const ProductCard = ({title, categoryName, price, img, inStock}) => {
          return(
            <div className="card-container">
              <div className="card-default">
                <div className="card-header">
							  { !inStock && <div className="card-label">OUT OF STOCK</div>}
                  <div className="card-dismiss-btn material-icons-outlined">favorite</div>
                  <div className="card-img-div">
                    <img src={img} className="card-img" />
                  </div>

                  <div className="card-text-div">
                    <h3 className="card-title">{title}</h3>
                    <h4 className="card-subtitle">{categoryName}</h4>
                  </div>
                </div>

                <div className="card-footer">
                  <div className="price">Price: Rs.{price}</div>
                  <a href="#"><button className="card-button">Add To Cart</button></a>
                </div>
              </div>
            </div>
          )
        }

export default ProductCard;