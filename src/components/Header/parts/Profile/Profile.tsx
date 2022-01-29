import React, { FC } from "react";
import BasketIcon from "./parts/Basket/Basket";
import FavouritesIcon from "./parts/Favourites/Favourites";
import ProfileIcon from "./parts/Profile/Profile";
import { Profile as ProfileStyled } from "./Profile.styles";

interface IProfileProps {}

const Profile: FC<IProfileProps> = () => {
  return (
    <ProfileStyled>
      <ProfileIcon />
      <FavouritesIcon />
      <BasketIcon />
    </ProfileStyled>
  );
};

export default Profile;
