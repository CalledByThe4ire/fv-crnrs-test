import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const theme = {
  colors: {
    white: "#ffffff",
    black: "#000000",
    grey: "#9f9f9f",
    lightGrey: "#dedede",
    red: "#d80909",
  },
};

export const breakpoints = {
  mobile: "320px",
  desktop: "1920px",
};

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
      width: inherit;
      max-width: ${breakpoints.desktop};
      height: inherit;
      background-color: ${theme.colors.white};
      font-family: 'AG_Helvetica', 'Arial', sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 1.2;
      color: ${theme.colors.black};
  }

  ${normalize}
`;
