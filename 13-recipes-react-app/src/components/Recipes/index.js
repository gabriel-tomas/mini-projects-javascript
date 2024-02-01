import React from 'react';
import PropTypes from 'prop-types';
import { FaRegClock, FaUserFriends, FaStar } from 'react-icons/fa';
import { ContainerRecipes } from './styled';

export default function Recipes({ items }) {
  const mealDifficultys = {
    easy: 'Fácil',
    medium: 'Moderado',
    hard: 'Dificíl',
  };

  return (
    <ContainerRecipes>
      {items.length > 0
        ? items.map((item) => {
            return (
              <div className="recipe-item" key={item.id}>
                <div className="container-img">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="container-bottom">
                  <h1>{item.name}</h1>
                  <div className="container-meal-info">
                    <span className="cook">
                      <FaRegClock />
                      <span>Cozimento - {item.cookTimeMinutes} min</span>
                    </span>
                    <span className="prep">
                      <FaRegClock />
                      <span>Preparamento - {item.prepTimeMinutes} min</span>
                    </span>
                    <span className="servings">
                      <FaUserFriends />
                      <span>Serve - {item.servings} pessoas</span>
                    </span>
                    <div className="container-difficulty-rating">
                      <span>
                        Dificuldade -{' '}
                        {mealDifficultys[item.difficulty.toLowerCase()]}
                      </span>
                      <span className="rating">
                        <FaStar />
                        {item.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        : null}
    </ContainerRecipes>
  );
}

Recipes.defautProps = {
  items: {},
};

Recipes.propTypes = {
  items: PropTypes.instanceOf(Object),
};
