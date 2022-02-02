import styled from "styled-components";
import { Icon } from "@iconify/react";

export const Pin = styled.div`
  display: flex;
  align-items: center;
  width: 180px;
  color: ${(props) => props.theme.colors.black};
`;

export const PinIcon = styled(Icon)`
    font-size: 32px;
`;
