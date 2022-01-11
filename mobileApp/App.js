import React from 'react';
import Navigator from './Navigator/Navigator';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import CartReducer from './Store/Reducer/CartReducer/CartReducer';
import ProductReducer from './Store/Reducer/ProductReducer/ProductReducer';
import ReduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
const App = () => {
  const rootReducer = combineReducers({
    product: ProductReducer,
    cart: CartReducer,
  });
  const Store = createStore(rootReducer, applyMiddleware(ReduxThunk));

  return (
    <Provider store={Store}>
      <Navigator />
    </Provider>
  );
};
export default App;
