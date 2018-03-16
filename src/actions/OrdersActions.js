import { Actions } from 'react-native-router-flux';
import axios from 'axios';

import {
  CREATE_ORDER,
  CREATE_ORDER_SUCCESS,
  FETCH_ORDERS,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDER_PRODUCTS,
  FETCH_ORDER_PRODUCTS_SUCCESS
} from './types';

export const fetchOrders = (clientId) => {
  const url = `http://localhost:3000/api/order?clientId=${clientId}`;
  console.log(url);
  return (dispatch) => {
    dispatch({ type: FETCH_ORDERS });
    axios.get(url)
      .then(response => {
        fetchOrdersSuccess(dispatch, response.data);
      }).catch(err => {
        console.log(err);
      });
  };
};

const fetchOrdersSuccess = (dispatch, orders) => {
  dispatch({
    type: FETCH_ORDERS_SUCCESS,
    payload: orders
  });
};

export const fetchOrderProducts = (orderId) => {
  const url = `http://localhost:3000/api/order/${orderId}/productsv2`;
  return dispatch => {
    dispatch({ type: FETCH_ORDER_PRODUCTS });
    axios.get(url)
      .then(response => {
        fetchOrderProductsSuccess(dispatch, response.data);
      }).catch(err => {
        console.log(err);
      });
  };
};

const fetchOrderProductsSuccess = (dispatch, products) => {
  dispatch({
    type: FETCH_ORDER_PRODUCTS_SUCCESS,
    payload: products
  });
  Actions.orderDetail();
};

export const createOrder = body => {
  const url = 'http://localhost:3000/api/order';

  return dispatch => {
    dispatch({ type: CREATE_ORDER });
    axios.post(url, body)
      .then(response => {
        createOrderSuccess(dispatch, response);
      }).catch(err => {
        console.log(err);
      });
  };
};

const createOrderSuccess = (dispatch, response) => {
  dispatch({
    type: CREATE_ORDER_SUCCESS,
    payload: response.data
  });
};
