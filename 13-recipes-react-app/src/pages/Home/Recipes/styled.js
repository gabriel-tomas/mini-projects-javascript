import styled from 'styled-components';
import fonts from '../../../config/fonts';

export const ContainerRecipe = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;

  .recipe-item {
    .container-img > img {
      width: 100%;
      border-radius: 10px;
    }

    h1 {
      font-size: ${fonts.fontSizeBase};
    }
  }
`;
