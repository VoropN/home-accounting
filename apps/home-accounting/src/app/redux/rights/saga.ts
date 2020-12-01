import { put, takeLatest } from 'redux-saga/effects';
import { postRightSuccess } from './actions';
import { FETCH_USER_RIGHTS_REQUEST} from './constants';

function* getUserRightsSaga() {
  yield put(postRightSuccess({ type: 'guest', showSidebar: false, showLanguages: true }));
}

export function* userRightsWatherSaga() {
  yield takeLatest(FETCH_USER_RIGHTS_REQUEST, getUserRightsSaga);
}
