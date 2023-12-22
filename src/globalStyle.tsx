import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: PT Sans;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
  }
`