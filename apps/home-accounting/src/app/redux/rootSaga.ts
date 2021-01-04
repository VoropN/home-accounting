import { all } from 'redux-saga/effects';
import { loginWatherSaga } from './user';
import { userRightsWatherSaga} from './rights';

export function* rootSaga() {
  yield all([
    loginWatherSaga(),
    userRightsWatherSaga()
  ]);
}
