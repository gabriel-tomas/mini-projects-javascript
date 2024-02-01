import styled from 'styled-components';

export const ContainerRecipes = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
  margin-bottom: 4rem;
  font-size: var(--font-size-base);

  .recipe-item {
    background-color: var(--backgroundCard);
    border-radius: 10px;
    animation: show .3s;
  }

  .container-img > img {
    width: 100%;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }

  .container-bottom {
    padding: 1rem;
  }

  .container-bottom h1 {
    font-size: var(--font-size-base);
  }

  .container-meal-info {
    display: flex;
    flex-direction: column;
    gap: .2rem;
    margin-top: .5rem;
  }

  .container-meal-info > span {
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }

  .container-difficulty-rating {
    margin-top: .5rem;
    font-size: var(--font-size-sm);
    display: flex;
    justify-content: space-between;
  }

  .container-difficulty-rating .rating {
    display: flex;
    align-items: center;
  }

  @keyframes show {
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }

  @media screen and (max-width: 573px) {
    margin-inline: 1rem;
  }
`;
