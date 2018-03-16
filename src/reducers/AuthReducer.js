import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  LOGOUT_USER,
  SIGNIN_USER,
  USERNAME_CHANGED,
  PHONE_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
  username: '',
  email: '',
  phone: '',
  password: '',
  user: null,
  error: '',
  loading: false,
  clientId: '5a8b4a7bcd6dd4029ea52925'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USERNAME_CHANGED:
      return { ...state, username: action.payload };
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PHONE_CHANGED:
      return { ...state, phone: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        user: action.payload,
        clientId: action.payload._id
      };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed.', password: '', loading: false };
    case SIGNIN_USER:
      return {
        ...state,
        clientId: action.payload._id
      };
    case LOGOUT_USER:
      return state;
    default:
      return state;
  }
};
