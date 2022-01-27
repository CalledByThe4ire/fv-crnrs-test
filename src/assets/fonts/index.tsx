import { createGlobalStyle } from "styled-components";

import AGHelveticaWoff from "./AG_Helvetica.woff";
import AGHelveticaWoff2 from "./AG_Helvetica.woff2";
import AGHelveticaBoldWoff from "./AG_HelveticaBold.woff";
import AGHelveticaBoldWoff2 from "./AG_HelveticaBold.woff2";

export const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'AG_Helvetica';
    src:
    url(${AGHelveticaWoff2}) format('woff2'),
    url(${AGHelveticaWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'AG_Helvetica Bold';
    src:
    url(${AGHelveticaBoldWoff2}) format('woff2'),
    url(${AGHelveticaBoldWoff}) format('woff');
    font-weight: 700;
    font-style: normal;
  }
`;
