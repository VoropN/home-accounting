import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGOUT_USER } from './constants';

export const login = (payload) => ({
  type: LOGIN_USER_REQUEST,
  payload
});

export const postLoginSuccess = (payload) => ({
  type: LOGIN_USER_SUCCESS,
  payload
});

export const logout = () => ({
  type: LOGOUT_USER
});
