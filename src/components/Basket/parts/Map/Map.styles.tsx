import styled from "styled-components";
import { down } from "styled-breakpoints";
import { rgba } from "polished";

export const Map = styled.figure`
  position: relative;
  grid-area: map;
  align-self: start;
  display: flex;
  flex-flow: column wrap;
  margin: 0;
  padding: 0;

  ${down("desktop")} {
    align-self: initial;
    margin-bottom: 24px;
  }

  img {
    object-fit: cover;
  }

  figcaption {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    padding: 40px 30px;
    font-family: "AG_Helvetica Bold", Arial, sans-serif;
    font-size: 40px;
    line-height: 1;
    font-weight: 1;
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => rgba(props.theme.colors.black, 0.8)};

    ${down("desktop")} {
      display: none;
    }
  }
`;
