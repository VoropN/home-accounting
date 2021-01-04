import { FETCH_USER_RIGHTS_SUCCESS } from './constants';

const initialState = {
  showSidebar: null, showLanguages: null, showMenu: null, showLanguage: null, showUserMenu: null, showModeSwither: null
};

export const rights = (state = initialState, action) => ({
  [FETCH_USER_RIGHTS_SUCCESS]: () => ({ ...state, ...action.payload })
})[action.type]?.() || state;
