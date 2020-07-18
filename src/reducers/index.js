import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import authReducer from './auth';
import { cartReducer} from './cardReducers';
import {orderCreateReducer,orderDetailsReducer, orderDeleteReducer , myOrderListReducer, orderListReducer} from './orderReducers'
import {productListReducer, productDetailsReducer, productSaveReducer, productDeleteReducer} from './pieceReducer';

 
export default combineReducers ({
    form: formReducer,
    auth: authReducer,
    cart: cartReducer,
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productSave: productSaveReducer,
    productDelete: productDeleteReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    myOrderList: myOrderListReducer,
    orderList: orderListReducer,
    orderDelete: orderDeleteReducer,
    
});