import React from "react";

import { Link } from '../../../../styles';
import { Header as HeaderStyled } from "./Header.styles";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderStyled>
      <h2>Корзина</h2>
      <p>
        <span>Есть аккаунт?</span>
        <Link to="!#">Войти</Link>
      </p>
    </HeaderStyled>
  );
};

export default Header;
