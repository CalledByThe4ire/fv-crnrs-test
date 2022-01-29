import React from "react";

import { Header as HeaderStyled } from "./Header.styles";
import Menu from "./parts/Menu/Menu";
import Search from "./parts/Search/Search";
import Profile from "./parts/Profile/Profile";
import Logo from "./parts/Logo/Logo";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderStyled>
      <Menu />
      <Search />
      <Profile />
      <Logo />
    </HeaderStyled>
  );
};

export default Header;
