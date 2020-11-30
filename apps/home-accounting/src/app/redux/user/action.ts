import { USER_LOGIN, USER_LOGOUT} from './constants';

export const login = (payload) => ({
  type: USER_LOGIN,
  payload
});

export const logout = () => ({
  type: USER_LOGOUT
})
