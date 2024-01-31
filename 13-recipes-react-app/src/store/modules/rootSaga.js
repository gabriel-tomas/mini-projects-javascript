import { all } from 'redux-saga/effects';

import getRecipes from './recipes/sagas';

export default function* rootSaga() {
  return yield all([getRecipes]);
}
