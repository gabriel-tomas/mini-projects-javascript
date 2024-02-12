import { createGlobalStyle, styled } from 'styled-components';
import colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  :root {
    --text: ${colors.text};
    --background: ${colors.background};
    --primary: ${colors.primary};
    --secondary: ${colors.secondary};
    --accent: ${colors.accent};

    --primary-shade0: ${colors.primaryShade0};
    --primary-shade1: ${colors.primaryShade1};
    --primary-shade2: ${colors.primaryShade2};

    --neutral1: ${colors.neutral1};
    --neutral2: ${colors.neutral2};

    --main-font: 'Fira Sans', sans-serif;

    --success: ${colors.messages.success};
    --info: ${colors.messages.info};
    --error: ${colors.messages.error};
    --warn: ${colors.messages.warn};
  }

  * {
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    box-sizing: border-box;
  }

  html, button, input, a {
    font-family: var(--main-font);
    font-size: 16px;
    color: var(--text);
  }

  body {
    background-color: var(--background);
  }

  button {
    background-color: var(--primary);
    height: 35px;
    padding-inline: 19px;
    font-weight: 700;
    border-radius: 100px;
  }

  button, a {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: var(--text);
    font-weight: 500;
  }

  a:hover {
    color: var(--neutral2)
  }

  ul {
    list-style: none;
  }

  p {
    line-height: 1.5rem;
  }

  /* body .Toastify div.Toastify__toast-body > div:nth-child(2) {
    color: var(--text);
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background-color: ${colors.messages.success};
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--error {
    background-color: ${colors.messages.error};
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--warning {
    background-color: ${colors.messages.warn};
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--info {
    background-color: ${colors.messages.info};
  } */
`;

export const Main = styled.main`
  min-width: 250px;
  max-width: 960px;
  padding-inline: clamp(1rem, 5vw, 3rem);
  margin-inline: auto;
  margin-top: 2rem;
`;
