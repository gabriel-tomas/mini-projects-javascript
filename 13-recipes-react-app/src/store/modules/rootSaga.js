import { all } from 'redux-saga/effects';

import example from './recipes/sagas';

export default function* rootSaga() {
  return yield all([example]);
}
