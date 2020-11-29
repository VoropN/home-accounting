import { combineReducers } from 'redux';
import { pageData } from './pageData/reducer';

export const rootReducer = combineReducers({
  pageData,
});
