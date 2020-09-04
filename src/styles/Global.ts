import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
      --background: #e1e8ed;
      --white: #FFF;
      --gray: #E1E8ED;
      --gray-strong: #657786
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
  h1, h2, strong {
    font-weight: 700;
  }

  span {
    font-weight: normal;
  }

  button {
    cursor: pointer;
  }

  img {
  border: 0;
  height: 37px;
  vertical-align: middle;
  display: inline-block;
  }

`;
