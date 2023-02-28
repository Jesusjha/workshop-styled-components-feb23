import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
    background-color: #f5f5f5;
  }

  body {
    max-width: 960px;
    margin: 0 auto;
  }
`