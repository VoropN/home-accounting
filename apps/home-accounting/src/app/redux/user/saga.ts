import { takeLatest, put, call } from 'redux-saga/effects';
import { fetchRights } from '../rights';
import { postLoginSuccess } from './action';
import { LOGIN_USER_REQUEST } from './constants';

function* postLoginSaga(userData) {
  try {
    const userLoginData = yield call(async(userData) => ({ id: 1, name: 'UserName', token: true }), userData);
    yield put(postLoginSuccess(userLoginData));
    yield put(fetchRights({ id: userLoginData.id }));
  } catch (e) {
    console.log(e);
  }
}

export function* loginWatherSaga() {
  yield takeLatest(LOGIN_USER_REQUEST, postLoginSaga);
}
