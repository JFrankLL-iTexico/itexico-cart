import axios from 'axios';

import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS
} from './types';

export const fetchItems = () => {
  const url = 'http://localhost:3000/api/product';
  return (dispatch) => {
    dispatch({ type: FETCH_PRODUCTS });
    axios.get(url)
      .then(response => {
        fetchProductsSuccess(dispatch, response.data);
      }).catch(err => {
        console.log(err);
      });
  };
};

const fetchProductsSuccess = (dispatch, products) => {
  dispatch({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products
  });
};
