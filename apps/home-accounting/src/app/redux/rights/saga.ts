import { call, put, takeLatest } from 'redux-saga/effects';
import { postRightSuccess } from './actions';
import { FETCH_USER_RIGHTS_REQUEST} from './constants';

function* getUserRightsSaga(data) {
  const rights = yield call(async (userData) => userData.id === -1
    ? { showSidebar: false, showMenu: false, showLanguage: true, showUserMenu: true, showModeSwither: true }
    : { showSidebar: true, showMenu: true, showLanguage: true, showUserMenu: true, showModeSwither: true },
    data.payload);
  yield put(postRightSuccess(rights));
}

export function* userRightsWatherSaga() {
  yield takeLatest(FETCH_USER_RIGHTS_REQUEST, getUserRightsSaga);
}
