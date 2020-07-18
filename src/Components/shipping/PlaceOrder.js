import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import  CheckoutSteps from './CheckoutSteps'; 
import { createOrder } from '../../actions/orderActions';
import './placeOrder.css';
 
function PlaceOrderScreen(props) {

  const cart = useSelector(state => state.cart);
  const orderCreate = useSelector(state => state.orderCreate);
  const { loading, success, error, order } = orderCreate;

  const { cartItems, shipping } = cart;
  console.log(cart);
  
  if (!shipping.address) {
    props.history.push("/shippingscreen");
  }

  const itemsPrice = cartItems.reduce((a, c) => a + c.prix * c.qty, 0);     
  const shippingPrice = itemsPrice > 100 ? 0 : 7; // ken akber mn 100 blech sinon b 7dt el livraison 
  const totalPrice = itemsPrice + shippingPrice ;

  const dispatch = useDispatch();
  const placeOrderHandler = () => {
    // create an order
    
    dispatch(createOrder({
      
      orderItems: cartItems, shipping,  itemsPrice, totalPrice
        }));

  }
  useEffect(() => {
    if (success) {
      props.history.push(`/orderscreen/${order._id}`);
    }

  }, [success]);

  return <div>
    <CheckoutSteps step1 step2 step3 step4 ></CheckoutSteps>
    <div className="placeorder">
      <div className="placeorder-info">
        <div>
          <h3>
            Shipping
          </h3>
          <div>
          {cart.shipping.address}, {cart.shipping.city},
          {cart.shipping.postalCode}, {cart.shipping.country},
          </div>
        </div>
        <div>
          <h3>Payment</h3>
          <div>
            Methode de payement :  A la livraison  
          </div>
        </div>
        <div>
          <ul className="cart-list-container">
            <li>
              <h3>
                Shopping Cart
          </h3>
              <div>
                Price
          </div>
            </li>
            {
              cartItems.length === 0 ?
                <div>
                  Cart is empty
          </div>
                :
                cartItems.map(item =>
                  <li>
                    <div className="cart-image">
                    <img src={`http://localhost:5000/${item.file}`} alt="product" />
                    </div>
                    <div className="cart-name">
                      <div>
                      <Link to={"/piece/" + item.piece}>
                      {item.nom}
                    </Link>

                      </div>
                      <div>
                        Qty: {item.qty}
                      </div>
                    </div>
                    <div className="cart-price">
                      ${item.prix}
                    </div>
                  </li>
                )
            }
          </ul>
        </div>

      
      </div>
      <div className="placeorder-action">
        <ul>
          <li>
            <br/>
           <center><h3>Order Summary</h3></center> 
          </li>
          <li>
            <div>Items</div>
            <div>${itemsPrice}</div>
          </li>
          <li>
            <div>Shipping</div>
            <div>${shippingPrice}</div>
          </li> 
          <li>
            <div>Order Total</div>
            <div>${totalPrice}</div>
          </li>

          <li>
           <center><button  type ="submit" className=" btn btn-primary mt-3 pr-3" onClick={()=>placeOrderHandler()  } >Place Order</button></center> 
          </li> 
        </ul>



      </div>

    </div>
  </div>

}

export default PlaceOrderScreen;