import { all, fork } from 'redux-saga/effects';

import * as AuthModule from '@/modules/auth';

export default function* rootSaga() {
  yield all([fork(AuthModule.Sagas)]);
}
