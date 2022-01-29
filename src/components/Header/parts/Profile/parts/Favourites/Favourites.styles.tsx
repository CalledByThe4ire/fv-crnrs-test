import styled from "styled-components";
import { down } from "styled-breakpoints";

import { Link } from "../../../../../../styles";

export const Favourites = styled(Link)`
  & > svg {
    width: 28px;
    height: 25px;
    transition: all 0.3s ease-in-out;

    ${down("desktop")} {
      width: 24px;
      height: 22px;
    }
  }
`;
