import {
  ADD_ITEM,
  REMOVE_ITEM,
  UPDATE_ITEM_QTY,
  CREATE_ORDER,
  CREATE_ORDER_SUCCESS,
  LOGOUT_USER
} from '../actions/types';

const INITIAL_STATE = {
  items: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      if (!state.items.some(i => i._id === action.payload._id)) {
        action.payload.quantity = 1;
        return { ...state, items: [...state.items, action.payload] };
      }
      return state;
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.slice().filter(elt => elt._id !== action.payload)
      };
    case UPDATE_ITEM_QTY:
      return {
        ...state,
        items: state.items.slice().map(elt => {
          if (elt._id === action.payload.id) {
            elt.quantity = action.payload.quantity;
          }
          return elt;
        })
      };
    case CREATE_ORDER:
      return {
        ...state
      };
    case CREATE_ORDER_SUCCESS:
      return {
        ...state,
        items: []
      };
    case LOGOUT_USER:
      return {
        ...state,
        items: []
      };
    default:
      return state;
  }
};
