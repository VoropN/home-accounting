import { LOGIN_USER_SUCCESS, LOGOUT_USER } from './constants';

const initialState = {
  name: null,
  token: null,
};

export const user = (state = initialState, action) => ({
  [LOGIN_USER_SUCCESS]: () => ({ ...state, ...action.payload }),
  [LOGOUT_USER]: () => ({ ...state, ...initialState }),
})[action.type]?.() || state;
