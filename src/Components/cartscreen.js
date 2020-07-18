import React, { useEffect } from "react";
import { addToCart, removeFromCart } from "../actions/cartAction";
import { useDispatch, useSelector, connect } from "react-redux";
import { compose } from "redux";

import { Link } from "react-router-dom";
import "./cart.css";

function Cartscreen(props) {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const pieceId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const dispatch = useDispatch();

  const removeFromCartHandler = (pieceId) => {
    dispatch(removeFromCart(pieceId));
  };

  useEffect(() => {
    if (pieceId) {
      dispatch(addToCart(pieceId, qty));
    }
  }, []);

  console.log(cartItems);

  const checkoutHandler = () => {
    const { isAuth } = props.isAuth;
    console.log(isAuth);

    if (!isAuth) {
      props.history.push("/connexion?redirect=shipping");
    } else {
      props.history.push("/shippingscreen");
    }
  };
  return (
    <div className="row">
      <div class=" container back-link">
        <br />
        <br />
        <a href="/listP"> &lt;&lt; Back to category</a>
      </div>
      <div className="col ">
        <div className="cart">
          <div className="cart-list">
            <ul className="cart-list-container">
              <li>
                <h3>Shopping Cart</h3>
                <div>Price</div>
              </li>
              {cartItems.length === 0 ? (
                <div>Cart is empty</div>
              ) : (
                cartItems.map((item) => (
                  <li>
                    <div className="cart-image">
                      <img
                        src={`http://localhost:5000/${item.file}`}
                        alt="product"
                      />
                    </div>
                    <div className="cart-name">
                      <div>
                        <Link to={"/piece/" + item.piece}>{item.nom}</Link>
                      </div>
                      <div>
                        Quantité : {item.qty}
                        <div className="pl-3">
                          <button
                            type="button "
                            className="button "
                            onClick={() => removeFromCartHandler(item.product)}
                          >
                            Delete
                          </button>{" "}
                        </div>
                      </div>
                    </div>

                    <div className="cart-price">{item.prix}</div>
                  </li>
                ))
              )}
            </ul>
          </div>
          <div className="col">
            <div className="cart-action">
              <h5>
                Subtotal ( {cartItems.reduce((a) => a + qty, 0)} items) :
                {cartItems.reduce((a, c) => a + c.prix * qty, 0)}
                DT
              </h5>
              <center>
                {" "}
                <button
                  onClick={checkoutHandler}
                  className="btn btn-primary mt-3"
                  disabled={cartItems.length === 0}
                >
                  Proceed to Checkout
                </button>{" "}
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    isAuth: state.auth.isAuthenticated,
    cartItems: state.cart.cartItems
  };
}

export default compose(connect(mapStateToProps))(Cartscreen);
