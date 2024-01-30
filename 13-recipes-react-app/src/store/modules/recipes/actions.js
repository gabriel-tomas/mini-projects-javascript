import * as types from '../types';

export function recipesRequest() {
  return {
    type: types.RECIPES_REQUEST,
  };
}

export function recipesSuccess(data) {
  return {
    type: types.RECIPES_SUCCESS,
    payload: data,
  };
}

export function recipesFailure() {
  return {
    type: types.RECIPES_FAILURE,
  };
}
