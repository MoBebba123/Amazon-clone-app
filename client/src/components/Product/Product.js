import React from 'react';
import Rating from '../Rating/Rating';
import "../../index.css"
import { Link } from 'react-router-dom';
export default function Product(props) {
  const { product } = props;
  return (
    <div key={product._id} className="card">
     
      <div className="card-body">
        <Link to={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </Link>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
        <div className="row">
          <div className="price">${product.price}</div>
       
        </div>
      </div>
      <Link to={`/product/${product._id}`}>
        <img className="medium" src={product.image} alt={product.name} />
      </Link>
    </div>

  );
}