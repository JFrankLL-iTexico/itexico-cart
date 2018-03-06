import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
  items: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, items: [] };
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, items: action.payload };
    default:
      return state;
  }
};
