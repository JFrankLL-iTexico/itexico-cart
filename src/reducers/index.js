import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import CartReducer from './CartReducer';
import ProductsReducer from './ProductsReducer';

export default combineReducers({
  auth: AuthReducer,
  cart: CartReducer,
  products: ProductsReducer
});
