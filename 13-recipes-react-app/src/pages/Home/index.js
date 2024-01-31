import React from 'react';
import { useDispatch } from 'react-redux';

import { ContainerRecipes, Title } from './styled';
import * as actions from '../../store/modules/recipes/actions';
import { useSelector } from 'react-redux';

import Recipes from '../../components/Recipes';

export default function Home() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.recipes.recipes);

  React.useEffect(() => {
    dispatch(actions.recipesRequest());
  }, []);

  return (
    <ContainerRecipes style={{ marginTop: `2rem` }}>
      <Title>Receitas do dia</Title>
      <Recipes items={items} />
    </ContainerRecipes>
  );
}
