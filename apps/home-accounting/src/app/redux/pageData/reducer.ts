import { CHANGE_PAGE_NAME } from './constants'

const initialState = {
  pageName: null
}

export const pageData = (state = initialState, action) => {
  return ({
    [CHANGE_PAGE_NAME]: {
      ...state, pageName: action.payload
    }
  })[action.type] || state;
}
