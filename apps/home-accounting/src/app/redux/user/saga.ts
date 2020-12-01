import { takeLatest, put } from 'redux-saga/effects';
import { postLoginSuccess } from './action';
import { LOGIN_USER_REQUEST } from './constants';

function* postLoginSaga(userData) {
  try {
    console.log('send userData to server', userData);
    yield put(postLoginSuccess({ name: 'UserName', token: true }));
  } catch (e) {
    console.log(e);
  }
}

export function* loginWatherSaga() {
  yield takeLatest(LOGIN_USER_REQUEST, postLoginSaga);
}
