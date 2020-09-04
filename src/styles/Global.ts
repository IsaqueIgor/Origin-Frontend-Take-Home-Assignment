import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
      --background: #e1e8ed;
      --white: #FFF;
      --gray: #E1E8ED;
      --blue-strong: #1B31A8;
      --blue-light: #0079FF;
  }
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    background-color: var(--background);
    min-height: 100%;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-family: 'Rubik', sans-serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }
  button {
    cursor: pointer;
     overflow: visible;
  }

  img {
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
`;
