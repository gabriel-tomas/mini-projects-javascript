import React, { useState } from 'react';

import axios from '../../services/axios';

import Recipes from '../../components/Recipes';
import Loading from '../../components/Loading';

import { ContainerRecipes, Title } from './styled';
import sortRecipes from './sortRecipes';

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  React.useEffect(() => {
    async function getRecipes() {
      const response = await axios.get('/recipes?limit=25');
      if (response.status !== 200) {
        setRecipes(null);
        return;
      }
      setRecipes(sortRecipes(response.data.recipes, 3));
    }
    getRecipes();
  }, []);

  return (
    <ContainerRecipes style={{ marginTop: `2rem` }}>
      <Title>Receitas do dia</Title>
      {recipes.length > 0 ? <Recipes items={recipes} /> : <Loading />}
    </ContainerRecipes>
  );
}
