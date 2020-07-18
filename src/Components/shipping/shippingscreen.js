import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { saveShipping } from '../../actions/cartAction';
import './shipping.css'; 
import CheckoutSteps from './CheckoutSteps';

function ShippingScreen(props) {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [nom, setnom] = useState('');

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShipping({ address, city, postalCode, nom }));
    props.history.push('payment');
  }
  return <div className='container'>
    <CheckoutSteps step1 step2 ></CheckoutSteps>
    <div className="form">
      <form onSubmit={submitHandler} >
       
         
            <center><h2 className='titre row'>Shipping</h2></center>
          
            <div className="col"></div>
          <center>  <div className="col-6">
          
            
          <label htmlFor="nom">
              nom
          </label>
            <input type="text" name="nom" id="nom" onChange={(e) => setnom(e.target.value)} required>
            </input>

            <label htmlFor="address">
              Address
          </label>
            <input type="text" name="address" id="address" onChange={(e) => setAddress(e.target.value)} required>
            </input>
          
            <label htmlFor="city">
              City
          </label>
            <input type="text" name="city" id="city" onChange={(e) => setCity(e.target.value)} required>
            </input>
          
     
            <label htmlFor="postalCode">
              Postal Code
          </label>
            <input type="text" name="postalCode" id="postalCode" onChange={(e) => setPostalCode(e.target.value)} required>
            </input>
          
          
            <br/><br/>
          
           <center><button type="submit" className="btn btn-primary ">Continue</button></center> 
           </div></center>
           <div className="col"></div>

        
      </form>
    </div>
  </div>

}
export default ShippingScreen;