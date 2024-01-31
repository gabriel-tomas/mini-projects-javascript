import * as types from '../types';

const initialState = {
  recipes: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.RECIPES_SUCCESS: {
      const newState = { ...state };
      newState.recipes = action.payload;
      return newState;
    }

    case types.RECIPES_REQUEST: {
      return state;
    }

    case types.RECIPES_FAILURE: {
      return state;
    }

    default: {
      return state;
    }
  }
};
