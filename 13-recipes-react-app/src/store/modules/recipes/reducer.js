import * as types from '../types';

const initialState = {
  recipes: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.RECIPES_SUCCESS: {
      console.log('Requisição feita com sucesso');
      const newState = { ...state };
      newState.recipes = action.payload;
      return newState;
    }

    case types.RECIPES_REQUEST: {
      console.log('Fazendo requisição');
      return state;
    }

    case types.RECIPES_FAILURE: {
      console.log('Falha na requisição');
      return state;
    }

    default: {
      return state;
    }
  }
};
