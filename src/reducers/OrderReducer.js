import {
  FETCH_ORDERS,
  FETCH_ORDERS_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
  orderList: [],
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
    default:
      return state;
  }
};
