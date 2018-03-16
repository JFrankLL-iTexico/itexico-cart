import {
  FETCH_ORDERS,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDER_PRODUCTS,
  FETCH_ORDER_PRODUCTS_SUCCESS,
  ADD_ORDER_TO_LIST,
  CREATE_ORDER_SUCCESS
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
    case CREATE_ORDER_SUCCESS:
      return {
        ...state,
        orderList: [...state.orderList, action.payload]
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
    case ADD_ORDER_TO_LIST:
      return {
        ...state,
        products: [...state.products, action.payload]
      };
    default:
      return state;
  }
};
