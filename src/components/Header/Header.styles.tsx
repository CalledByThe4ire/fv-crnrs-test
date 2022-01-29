import styled from "styled-components";
import { down } from "styled-breakpoints";

export const Header = styled.header`
  display: grid;
  grid-template-areas:
    "search profile"
    "logo logo";
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto;
  margin-top: 30px;
  margin-bottom: 55px;
  margin-left: auto;
  margin-right: auto;
  transition: all 0.3s ease-in-out;

  ${down("desktop")} {
    grid-template-areas: "menu search logo profile";
    grid-template-columns: auto auto 1fr auto;
    grid-template-rows: auto;
    margin-top: 16px;
    margin-bottom: 45px;
  }
`;
