import styled from 'styled-components';
import fonts from '../../config/fonts';

export default styled.header`
  border-bottom: 1px solid var(--neutral1);
  padding-block: .8rem;
  display: flex;
  justify-content: center;

  h1 {
    font-size: ${fonts.fontSizeMd};
  }
`;
