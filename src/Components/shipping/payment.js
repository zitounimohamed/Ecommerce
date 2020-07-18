import React  from 'react';
import CheckoutSteps from './CheckoutSteps';
import {Link} from 'react-router-dom';

function PaymentScreen(props) {


  return <div>
    <CheckoutSteps step1 step2 step3 ></CheckoutSteps>
    <center><div className="container">
   
            <h2>Payment</h2>
           <h6>Payment à la livraison .
                    Maximaum apres 7 jours
                </h6><br/><br/>
         
           <Link to={'/placeorder'}><button type="submit" className="btn btn-primary ">Continue</button></Link>
         </div></center>
  </div>
}
export default PaymentScreen;