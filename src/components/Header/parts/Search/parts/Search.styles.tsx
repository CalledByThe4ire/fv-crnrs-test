import styled from "styled-components";
import { down } from "styled-breakpoints";

import { Link } from "../../../../../styles";
import { Input } from "../../../../Form/Form.styles";

export const Search = styled(Link)`
  margin-right: 20px;

  & > svg {
    width: 25px;
    height: 25px;
    transition: all 0.3s ease-in-out;

    ${down("desktop")} {
      width: 22px;
      height: 22px;
    }
  }
`;

export const InputStyled = styled(Input)`
  width: 250px;
  font-size: 18px;
  line-height: 1.3;

  ${down("desktop")} {
    display: none;
  }
`;
