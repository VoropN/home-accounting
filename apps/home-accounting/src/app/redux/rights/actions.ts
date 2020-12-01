import { FETCH_USER_RIGHTS_REQUEST, FETCH_USER_RIGHTS_SUCCESS } from './constants';

export const fetchRights = () => ({
  type: FETCH_USER_RIGHTS_REQUEST,
});

export const postRightSuccess = (payload) => ({
  type: FETCH_USER_RIGHTS_SUCCESS,
  payload
});
