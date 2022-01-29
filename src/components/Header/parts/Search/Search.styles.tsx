import styled from "styled-components";
import { down } from "styled-breakpoints";

export const Search = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  grid-area: search;
  transition: all 0.3s ease-in-out;

  ${down("desktop")} {
    margin-top: 0;
  }
`;
