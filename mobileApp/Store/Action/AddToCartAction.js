import {CartAction} from './ActionConstent';

export const AddToCart = cartItem => {
  return async dispatch => {
    dispatch({
      type: CartAction.Add_TO_CART,
      cartItem: cartItem,
    });
  };
};
