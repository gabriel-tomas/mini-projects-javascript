import React from 'react';
import PropTypes from 'prop-types';

import { ContainerRecipe } from './styled';

export default function Recipes({ items }) {
  const recipes = items.recipes;
  console.log(recipes);
  return (
    <ContainerRecipe>
      {recipes
        ? recipes.map((item) => {
            return (
              <div className="recipe-item" key={item.id}>
                <div className="container-img">
                  <img src={item.image} alt={item.name} />
                </div>
                <h1>{item.name}</h1>
              </div>
            );
          })
        : null}
    </ContainerRecipe>
  );
}

Recipes.defautProps = {
  items: {},
};

Recipes.propTypes = {
  items: PropTypes.instanceOf(Object),
};
