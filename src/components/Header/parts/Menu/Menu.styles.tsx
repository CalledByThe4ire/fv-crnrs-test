import styled from "styled-components";
import { down } from "styled-breakpoints";

import { Link } from "../../../../styles";

export const Menu = styled(Link)`
  grid-area: menu;
  place-self: center;
  display: none;
  margin-right: 16px;
  transition: all 0.3s ease-in-out;

  ${down("desktop")} {
      display: flex;
  }
`;
