import React from 'react';
import { useDispatch } from 'react-redux';

import { Title } from './styled';
import * as actions from '../../store/modules/recipes/actions';
import { useSelector } from 'react-redux';

import Recipes from './Recipes';

export default function Home() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.recipes.recipes);

  React.useEffect(() => {
    dispatch(actions.recipesRequest());
  }, []);

  return (
    <div style={{ marginTop: `2rem` }}>
      <Title>Receitas do dia</Title>
      <Recipes items={items} />
    </div>
  );
}
