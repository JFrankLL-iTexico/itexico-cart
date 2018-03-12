import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import CartReducer from './CartReducer';
import ProductsReducer from './ProductsReducer';
import OrderReducer from './OrderReducer';

export default combineReducers({
  auth: AuthReducer,
  cart: CartReducer,
  products: ProductsReducer,
  orders: OrderReducer
});
