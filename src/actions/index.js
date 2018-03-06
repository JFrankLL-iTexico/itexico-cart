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
  FETCH_PRODUCTS_SUCCESS
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

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    Actions.main(); //FIXME: Remove
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch((err) => {
        // firebase.auth().createUserWithEmailAndPassword(email, password)
        //   .then(user => loginUserSuccess(dispatch, user))
        //   .catch(() => loginUserFail(dispatch));
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

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  //Actions.main();
};

export const addItemToCart = (item) => {
  return {
    type: ADD_ITEM,
    payload: item
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
