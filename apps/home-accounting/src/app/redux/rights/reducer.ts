import { FETCH_USER_RIGHTS_SUCCESS } from './constants';

const initialState = {
  type: null, showSidebar: null, showLanguages: null
};

export const rights = (state = initialState, action) => ({
  [FETCH_USER_RIGHTS_SUCCESS]: () => ({ ...state, ...action.payload })
})[action.type]?.() || state;
