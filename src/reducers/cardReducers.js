import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING,
} from "../actions/types";

function cartReducer(
  state = { cartItems: [], shipping: {}, payment: {} },
  action
) {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      console.log(item);

      const piece = state.cartItems.findIndex((x) => {
        console.log(`${x.pieces} == ${item.pieces}`);
        return x.pieces === item.pieces;
      });
      console.log(piece);
      if (piece != -1) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) => {
            console.log(x.pieces === item.pieces);
            if (x.pieces === item.pieces) {
              return {
                ...x,
                qty: x.qty + item.qty,
              };
            }
            return x;
          }),
        };
      }

      return { ...state, cartItems: [...state.cartItems, item] };
    case CART_REMOVE_ITEM:
      return {
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    case CART_SAVE_SHIPPING:
      return { ...state, shipping: action.payload };
    /*case CART_SAVE_PAYMENT:
                return { ...state, payment: action.payload };*/
    default:
      return state;
  }
}

export { cartReducer };
