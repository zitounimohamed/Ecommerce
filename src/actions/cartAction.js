import Axios from 'axios';
import Cookie from "js-cookie";
import {CART_ADD_ITEM , CART_REMOVE_ITEM, CART_SAVE_SHIPPING} from './types'

export const addToCart = (pieceId, qty) => async (dispatch, getState) => {
    try {
      const  {data}  = await Axios.get(`http://localhost:5000/piece/${pieceId}`);
      console.log(data);

      dispatch({
        type: CART_ADD_ITEM, payload: { nom : data.nom,
          prix : data.prix,file : data.file, pieces : data._id
          , qty}
      });

      const { cart: { cartItems } } = getState();
      Cookie.set("cartItems", JSON.stringify(cartItems));
  

    } catch(error){

    }
    }
  export  const removeFromCart = (pieceId) => (dispatch, getState) => {
        dispatch({ type: CART_REMOVE_ITEM, payload: pieceId });
    }
 /*   export const saveId = () =>(dispatch)=>*/
    export const saveShipping = (data) => (dispatch) => {
      dispatch({ type: CART_SAVE_SHIPPING, payload: data });
    }
  