import styled from 'styled-components';
import colors from '../../config/colors';
import fonts from '../../config/fonts';

export default styled.header`
  border-bottom: 1px solid ${colors.neutral1};
  padding-block: .8rem;
  display: flex;
  justify-content: center;

  h1 {
    font-size: ${fonts.fontSizeMd};
  }
`;
