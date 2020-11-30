import { takeLatest, put } from 'redux-saga/effects';
import { login, USER_LOGIN } from '@app/redux/user'

function* postLoginSaga(userData = { name: 'UserName', token: true }) {
  try {
    yield put(login(userData));
  } catch (e) {
    console.log(e)
  }
}

export default function* loginPageWatherSaga() {
  yield takeLatest(USER_LOGIN, postLoginSaga)
}
