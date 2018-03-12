import {
  ADD_ITEM,
  UPDATE_ITEM_QTY,
  CREATE_ORDER
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
      return state;
    default:
      return state;
  }
};
