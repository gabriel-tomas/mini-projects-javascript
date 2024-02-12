import styled from 'styled-components';

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin-inline: auto;

  .container-input {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: .3rem;
    margin-top: .5rem;

    input {
      height: 34px;
      border: 1px solid var(--neutral1);
      border-radius: 4px;
      padding-inline: .6rem;
      width: 100%;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const ContainerConversation = styled.div`
  border: 1px solid var(--neutral1);
  margin-top: 1rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  border-radius: 5px;
  max-height: 570px;
  overflow-y: auto;

  .paragraph-conversation + p {
    margin-top: 1.2rem;
  }
`;
