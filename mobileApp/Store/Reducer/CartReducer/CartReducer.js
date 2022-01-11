import {CartAction} from '../../Action/ActionConstent';

const initialState = {
  cartItems: [],
  totalAmount: 0,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case CartAction.Add_TO_CART:
      console.log(action.cartItem.price);
      state = {
        ...state,
        cartItems: [...state.cartItems, action.cartItem],
        totalAmount: state.totalAmount + action.cartItem.price,
      };
  }

  return state;
};
