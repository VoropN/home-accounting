import { all } from 'redux-saga/effects';
import loginPageWatherSaga from './page/saga';

export function* rootSaga() {
  yield all([loginPageWatherSaga]);
}
