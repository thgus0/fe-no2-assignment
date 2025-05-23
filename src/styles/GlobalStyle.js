import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    font-size: 0.875rem;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
