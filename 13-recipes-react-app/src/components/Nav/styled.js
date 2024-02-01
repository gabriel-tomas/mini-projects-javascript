import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  bottom: 10svh;
  left: 50%;
  transform: translateX(-50%);
`;

export const Navigator = styled.nav`
  display: flex;
  align-items: center;
  gap: .3rem;
  background-color: var(--secondary);
  padding: .3rem 1rem;
  border-radius: 50px;

  .container-nav-icon.actived {
    background-color: var(--accent);
    box-shadow: 0 0 10px var(--neutral2);
    transition: all .5s;
  }

  .container-nav-icon {
    display: block;
    width: clamp(2.8rem, 2.627rem + 1.108vw, 3.25rem);
    height: clamp(2.8rem, 2.627rem + 1.108vw, 3.25rem);
    padding: clamp(0.7rem, 0.546rem + 0.985vw, 1.1rem);
    border-radius: 50%;

    &:hover {
      filter: brightness(.9);
    }

    svg {
      width: 100%;
      height: 100%;
    }
  }
`;
