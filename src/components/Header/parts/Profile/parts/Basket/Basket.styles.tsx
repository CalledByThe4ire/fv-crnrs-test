import styled from "styled-components";
import { down } from "styled-breakpoints";

import { Link } from "../../../../../../styles";

export const Basket = styled(Link)`
  position: relative;

  &::before {
    content: attr(data-count);
    position: absolute;
    top: -8px;
    right: -8px;
    display: flex;
    justify-content: center;
    align-items: baseline;
    width: 16px;
    height: 16px;
    font-size: 12px;
    line-height: 1.5;
    color: ${(props) => props.theme.colors.white};
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.black};
  }

  &[data-count="0"] {
    &::before {
      display: none;
    }
  }

  & > svg {
    width: 23px;
    height: 25px;
    transition: all 0.3s ease-in-out;

    ${down("desktop")} {
      width: 20px;
      height: 22px;
    }
  }
`;
