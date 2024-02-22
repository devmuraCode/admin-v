import { all, call, put, takeLatest } from 'redux-saga/effects';

import * as Api from './api';
import * as Actions from './actions';
import * as Constants from './constants';

export function* Logout(action: ReturnType<typeof Actions.Logout.request>) {
  try {
    yield call(Api.Logout);
    // eslint-disable-next-line no-empty
  } catch (e) {}
  yield put(Actions.Logout.success());
}

export default function* root() {
  yield all([takeLatest(Constants.LOGOUT.REQUEST, Logout)]);
}