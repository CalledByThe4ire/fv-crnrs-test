import styled, { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { Link as ReactRouterDomLink } from "react-router-dom";

export const theme = {
  colors: {
    white: "#ffffff",
    black: "#000000",
    grey: "#9f9f9f",
    lightGrey: "#dedede",
    red: "#d80909",
  },
  fontSizes: {
    small: "12px",
    large: "18px",
  },
};

export const breakpoints = {
  mobile: "320px",
  desktop: "1200px",
};

export const Container = styled.div`
  min-width: ${breakpoints.mobile};
  max-width: ${breakpoints.desktop};
  margin: 0 auto;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
  transition: all 0.3s ease-in-out;
`;

export const Link = styled(ReactRouterDomLink)`
  all: unset;
  display: flex;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
`;

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
      background-color: ${theme.colors.white};
      font-family: 'AG_Helvetica', 'Arial', sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 1.2;
      color: ${theme.colors.black};
  }

  ${normalize}
`;
