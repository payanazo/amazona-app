import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

export default function Product(props) {
  const { product } = props;

  return (
    <div key={product._id} className="product-card">
      <div className="product-card-image-body">
        <span className="helper"></span>
        <Link to={`/product/${product._id}`}>
          <img
            className="medium-product"
            src={product.image}
            alt={product.name}
          />
        </Link>
      </div>
      <div className="product-card-body ">
        <Link to={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </Link>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
        <div className="row">
          <div className="price">${product.price}</div>
          <div>
            <Link to={`/seller/${product.seller._id}`}>
              {product.seller.seller.name}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
