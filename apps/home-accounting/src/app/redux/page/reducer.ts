import { CHANGE_PAGE_NAME } from './constants'

const initialState = {
  name: null,
}

export const page = (state = initialState, action) => ({
  [CHANGE_PAGE_NAME]: () => ({ ...state, name: action.payload }),
})[action.type]?.() || state;
