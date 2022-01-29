import React, { FC } from "react";

import Icon from "../../../Icon/Icon";
import { Menu as MenuStyled } from './Menu.styles';

interface IMenuProps {}

const Menu: FC<IMenuProps> = () => {
  return (
    <MenuStyled to="!#">
      <Icon name="menu" />
    </MenuStyled>
  );
};

export default Menu;
