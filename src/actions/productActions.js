import {
    PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL,
 PRODUCT_SAVE_REQUEST, PRODUCT_SAVE_SUCCESS, PRODUCT_SAVE_FAIL
  } from "./types"
  
  import axios from 'axios';
  import Axios from "axios";
  
  const listPieces = (category = '', searchKeyword = '', sortOrder = '') => async (dispatch) => {
    try {
  
      dispatch({ type: PRODUCT_LIST_REQUEST });
      const { data } = await axios.get("http://localhost:5000/pieces/?category=" + category +
        "&searchKeyword=" + searchKeyword + "&sortOrder=" + sortOrder);
      dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    }
    catch (error) {
  
      dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
    }
  }
  
  const savePiece = (piece) => async (dispatch, getState) => {
    try {
      dispatch({ type: PRODUCT_SAVE_REQUEST, payload: piece });
      const { userSignin: { userInfo } } = getState();
      if (!piece._id) {
        const { data } = await Axios.post('/api/products', piece, { 
          headers: {
            'Authorization': 'Bearer ' + userInfo.token
          }
        });
        dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
      } else {
        const { data } = await Axios.put('/api/products/' + piece._id, piece, {
          headers: {
            'Authorization': 'Bearer ' + userInfo.token
          }
        });
        dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
      }
  
    } catch (error) {
  
      dispatch({ type: PRODUCT_SAVE_FAIL, payload: error.message });
    }
  }
  // a3ml export
  const detailsProduct = (pieceId) => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: pieceId });
      const { data } = await axios.get(`http://localhost:5000/piece/${pieceId}`);
      dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message });
  
    }
  }
  /*
  const deleteProdcut = (productId) => async (dispatch, getState) => {
    try {
      const { userSignin: { userInfo } } = getState();
      dispatch({ type: PRODUCT_DELETE_REQUEST, payload: productId });
      const { data } = await axios.delete("/api/products/" + productId, {
        headers: {
          Authorization: 'Bearer ' + userInfo.token
        }
      });
      dispatch({ type: PRODUCT_DELETE_SUCCESS, payload: data, success: true });
    } catch (error) {
      dispatch({ type: PRODUCT_DELETE_FAIL, payload: error.message });
  
    }
  }
  */
  export { listPieces, savePiece,  }