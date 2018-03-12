import {
  FETCH_ORDERS,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDER_PRODUCTS,
  FETCH_ORDER_PRODUCTS_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
  orderList: [],
  products: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ORDERS:
      return {
        ...state,
        orderList: []
      };
    case FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        orderList: action.payload
      };
    case FETCH_ORDER_PRODUCTS:
      return {
        ...state,
        products: []
      };
    case FETCH_ORDER_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload
      };
    default:
      return state;
  }
};
