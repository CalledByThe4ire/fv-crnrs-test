import React, { FC } from "react";

import Icon from "../../../../../Icon/Icon";
import { Favourites as FavouritesStyled } from './Favourites.styles';

interface IFavouritesProps {}

const Favourites: FC<IFavouritesProps> = () => {
  return (
    <FavouritesStyled to="!#">
      <Icon name="favourites" />
    </FavouritesStyled>
  );
};

export default Favourites;
