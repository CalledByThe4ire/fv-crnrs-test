import React, { FC } from "react";

import Icon from "../../../Icon/Icon";
import { Logo as LogoStyled } from './Logo.styles';

interface ILogoProps {}

const Logo: FC<ILogoProps> = () => {
  return (
    <LogoStyled to="!#">
      <Icon name="logo" />
    </LogoStyled>
  );
};

export default Logo;
