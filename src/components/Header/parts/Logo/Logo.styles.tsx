import styled from "styled-components";
import { down } from "styled-breakpoints";

import { Link } from "../../../../styles";

export const Logo = styled(Link)`
  grid-area: logo;
  place-self: center;
  margin-top: 40px;
  transition: all 0.3s ease-in-out;

  ${down("desktop")} {
    margin-top: initial;
  }

  & > * {
    width: 160px;
    height: 50px;
    transition: all 0.3s ease-in-out;

    ${down("desktop")} {
      width: 77px;
      height: 24px;
    }
  }
`;
