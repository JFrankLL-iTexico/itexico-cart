import {
  ADD_ITEM,
  REMOVE_ITEM,
  UPDATE_ITEM_QTY
} from './types';

export const addItemToCart = (item) => {
  return {
    type: ADD_ITEM,
    payload: item
  };
};

export const removeItemFromCart = itemId => {
  return {
    type: REMOVE_ITEM,
    payload: itemId
  };
};

export const updateItemQty = (id, quantity) => {
  return {
    type: UPDATE_ITEM_QTY,
    payload: {
      id,
      quantity
    }
  };
};
