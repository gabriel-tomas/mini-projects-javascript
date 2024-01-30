import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';

const requisicao = () => {
  return new Promise((resolve, reject) => {
    axios.get('?limit=10').then((res) => {
      if (res.status !== 200) {
        reject(res);
        return;
      }
      resolve(res);
    });
  });
};

function* getRecipes() {
  try {
    const { data } = yield call(requisicao);
    yield put(actions.recipesSuccess(data));
  } catch (err) {
    yield put(actions.recipesFailure());
    toast.error('Deu erro');
  }
}

export default all([takeLatest(types.RECIPES_REQUEST, getRecipes)]);
