import { USER_LOGIN, USER_LOGOUT } from './constants';

const initialState = {
  name: null,
  token: true,
}

export const user = (state = initialState, action) => ({
  [USER_LOGIN]: () => ({ ...state, ...action }),
  [USER_LOGOUT]: () => ({ ...state, ...initialState, token: null }),
})[action.type]?.() || state;
