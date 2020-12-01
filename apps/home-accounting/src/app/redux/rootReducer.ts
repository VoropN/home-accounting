import { combineReducers } from 'redux';
import { page } from './page';
import { user } from './user';
import { rights } from './rights';

export const rootReducer = combineReducers({
  page,
  user,
  rights
});
