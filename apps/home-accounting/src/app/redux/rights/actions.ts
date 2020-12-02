import { FETCH_USER_RIGHTS_REQUEST, FETCH_USER_RIGHTS_SUCCESS } from './constants';

export const fetchRights = (payload = {id: -1}) => ({
  type: FETCH_USER_RIGHTS_REQUEST,
  payload
});

export const postRightSuccess = (payload) => ({
  type: FETCH_USER_RIGHTS_SUCCESS,
  payload
});
