import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartAction';
import MessageBox from '../components/MessageBox';

function CartScreen(props) {


  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  const dispatch = useDispatch();
  const increaseQuantity = (id, qty, countInStock, color, size) => {

    const quantity = qty + 1;
    if (countInStock <= qty) {
      return;
    }
    dispatch(addToCart(id, quantity, color, size));
  };

  const decreaseQuantity = (id, qty, color, size) => {

    const quantity = qty - 1;
    if (1 >= qty) {
      return;
    }
    dispatch(addToCart(id, quantity, color, size));
  };


  const removeFromCartHandler = (id) => {
    // delete action
    dispatch(removeFromCart(id));

  };
  const checkoutHandler = () => {
    props.history.push('/signin?redirect=shipping');
  };
  return (
    <div>
      <div className="row top">
        <div className="col-2">
          <h1 style={{ paddingLeft: "10px" }}>Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <MessageBox>
              Cart is empty. <Link to="/">Go Shopping</Link>
            </MessageBox>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li key={item.product}>
                  <div className="row">
                    <div>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="small"
                      ></img>
                    </div>
                    <div className="min-30">
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </div>
                    <div>
                      {item.size}
                    </div>
                    <div>
                      {item.color}
                    </div>

                    <div>
                      <button
                        onClick={() =>
                          decreaseQuantity(
                            item.product,
                            item.qty,
                            item.color,
                            item.size
                          )
                        }
                      >
                        -
                      </button>
                      <input type="number" value={item.qty} readOnly />
                      <button
                        onClick={() =>
                          increaseQuantity(
                            item.product,
                            item.qty,
                            item.color,
                            item.size,
                          )
                        }
                      >
                        +
                      </button>
                    </div>

                    <div>${item.price}</div>
                    <div>
                      <button
                        type="button"
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <h2>
                  Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : $
                  {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                </h2>

              </li>
              <li>
                <button
                  type="button"
                  onClick={checkoutHandler}
                  className="primary block"
                  disabled={cartItems.length === 0}
                >
                  Proceed to Checkout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withRouter(CartScreen)  