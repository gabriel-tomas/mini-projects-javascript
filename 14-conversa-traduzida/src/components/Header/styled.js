import styled from 'styled-components';

export default styled.header`
  border-bottom: 1px solid var(--neutral1);
  padding-block: .6rem;
  padding-inline: 1rem;

  div > h1 {
    text-align: center;
    color: var(--primary-shade0);
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;

  a {
    color: var(--primary-shade0);
  }
`;
