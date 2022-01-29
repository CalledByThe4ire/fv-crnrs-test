import styled from "styled-components";
import { down } from "styled-breakpoints";

import { Link } from "../../../../../../styles";

export const Profile = styled(Link)`
  & > svg {
    width: 23px;
    height: 25px;
    transition: all 0.3s ease-in-out;
  }
  ${down("desktop")} {
    display: none;
  }
`;
