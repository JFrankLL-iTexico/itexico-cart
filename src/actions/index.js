import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

import {
  USERNAME_CHANGED,
  EMAIL_CHANGED,
  PHONE_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  LOGOUT_USER,
  ADD_ITEM,
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  UPDATE_ITEM_QTY,
  SIGNIN_USER,
  CREATE_ORDER,
  FETCH_ORDERS,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDER_PRODUCTS,
  FETCH_ORDER_PRODUCTS_SUCCESS
} from './types';

export const usernameChanged = (text) => {
  return {
    type: USERNAME_CHANGED,
    payload: text
  };
};

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const phoneChanged = (text) => {
  return {
    type: PHONE_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const signInUser = ({ email, password }) => {
  return dispatch => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => {
        dispatch({
          type: SIGNIN_USER,
          payload: user
        });
        Actions.main();
      }).catch(err => {
        console.log(err);
      });
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    Actions.main();
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(err => {
        console.log(err);
        loginUserFail(dispatch);
      });
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    dispatch({ type: LOGOUT_USER });
    Actions.auth();
  };
};

const loginUserFail = dispatch => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.main();
};

export const addItemToCart = (item) => {
  return {
    type: ADD_ITEM,
    payload: item
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

export const fetchOrders = (clientId) => {
  const url = `http://localhost:3000/api/order?clientId=${clientId}`;
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
        console.log(response);
      }).catch(err => {
        console.log(err);
      });
  };
};
