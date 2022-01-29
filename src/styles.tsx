import styled, { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { down } from "styled-breakpoints";
import { Link as ReactRouterDomLink } from "react-router-dom";

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

export const Container = styled.div`
  min-width: ${breakpoints.mobile};
  max-width: ${breakpoints.desktop};
  margin: 0 405px;
  transition: all 0.3s ease-in-out;

  ${down("desktop")} {
    margin: 0 16px;
  }
`;

export const Link = styled(ReactRouterDomLink)`
  display: flex;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
`;

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body,
  #root {
    width: inherit;
    height: inherit;
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
