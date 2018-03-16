import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import * as authController from '../controllers/authController';

import {
  USERNAME_CHANGED,
  EMAIL_CHANGED,
  PHONE_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  LOGOUT_USER,
  SIGNIN_USER,
  SET_USER
} from './types';

// #region Form input handlers
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
// #endregion

export const signInUser = ({ username, email, password }) => {
  return dispatch => {
    const body = {
      name: username,
      lastnamefa: 'default',
      lastnamemo: 'default',
      birthdate: '1980-11-20',
      address: email
    };
    authController.createUser(body)
      .then(result => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => {
            dispatch({ type: SIGNIN_USER, payload: result });
            Actions.main();
          }).catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserOnAPI(dispatch, email))
      .catch(err => loginUserFail(dispatch, err));
  };
};

const loginUserOnAPI = (dispatch, email) => {
  authController.fetchAllUsers()
    .then(users => {
      const filtered = users.filter(elt => elt.address === email);
      if (filtered.length) {
        loginUserSuccess(dispatch, filtered[0]);
      }// TODO: not logged in because inexistent user in api
    }).catch(err => console.log(err));
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
