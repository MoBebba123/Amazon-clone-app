import React, { useEffect, useState } from 'react';
import Rating from '../components/Rating/Rating';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import styled from 'styled-components';
import { addToCart } from '../actions/cartAction';
import {useAlert} from 'react-alert';
const FilterColor = styled.div`

width: 20px;
height: 20px;
border-radius: 50%;
margin: 0px 5px;
cursor: pointer;

background-color :${props => props.color};
`


function ProductScreen({ match }) {
  const [qty, setQty] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const alert = useAlert();
  const increaseQuantity = () => {
    if (product.countInStock <= qty) return;

    const quantity = qty + 1;
    setQty(quantity);
  };

  const decreaseQuantity = () => {
    if (1 >= qty) return;

    const quantity = qty - 1;
    setQty(quantity);
  };

  useEffect(() => {
    dispatch(detailsProduct(match.params.id));
  }, [dispatch, match.params.id]);
  
  const addToCartHandler = () => {
      if(!color || !size ){
        alert.error("please choose color and size !!")
            }else{

          dispatch(
            addToCart(match.params.id, qty, color, size)
            );
          }
  };
  return (
    <div>
   
      <div style={{ marginTop: "40px" }} >
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div>
            <a href="/" ><p style={{ marginTop: "50px", marginLeft: "10px" }}>Back to Home</p></a>
            <div key={product._id} className="row top">
              <div className="col-2">
                <div>
                  <img alt='' src={product.image} />
                </div>
              </div>
              <div className="col-1">
                <ul>
                  <li>
                    <h1>{product.name}</h1>
                  </li>
                  <li>
                    <Rating
                      rating={product.rating}
                      numReviews={product.numReviews}
                    ></Rating>
                  </li>
                  <li>Pirce : ${product.price}</li>
                  <li>
                    <div className="FilterContainer" >
                      <div className="Filter">
                        <span className="FilterTitle">Color:</span>

                        {product.color?.map((c) => (

                          <FilterColor color={c} key={c} value={color}  onClick={()=> {setColor(c)}}  ></FilterColor>
                        ))}
                      </div>

                      <div className="Filter">
                        <select className="FilterSize"
                          onChange={(e) => setSize(e.target.value)}
                          value={size}
                        >
                          <option>Size</option>
                          {product.size?.map((s) => (
                            <option className="FilterSizeOption"
                              key={s}
                              value={s}
                            >
                              {s}</option>
                          ))}
                        </select>
                      </div>

                    </div>

                  </li>
                  <li>
                    Description:
                    <p>{product.description}</p>
                  </li>
                </ul>
              </div>

              <div className="col-1">
                <div className="card card-body">
                  <ul>
                    <li>
                      <div className="row">
                        <div>Price</div>
                        <div className="price">${product.price}</div>
                      </div>
                    </li>
                    <li>
                      <div className="row">
                        <div>Status</div>
                        <div>
                          {product.countInStock > 0 ? (
                            <span className="success">In Stock</span>
                          ) : (
                            <span className="danger">Unavailable</span>
                          )}
                        </div>
                      </div>
                    </li>
                    {
                      product.countInStock > 0 && (
                        <>
                          <li>
                            <div className="row">
                              <div>Qty</div>
                              <div className="detailsBlock-3-1-1">
                                <button onClick={decreaseQuantity}>-</button>
                                <input readOnly type="number" value={qty} />
                                <button onClick={increaseQuantity}>+</button>
                              </div>
                            </div>
                          </li>

                          <li>
                            <button
                              onClick={addToCartHandler}
                              className="primary block"
                            >Add to Cart</button>
                          </li>
                        </>

                      )
                    }
                  </ul>
                </div>
              </div>
            </div>


          </div>
        )}

      </div>
    </div>
  );
}
export default withRouter(ProductScreen)




