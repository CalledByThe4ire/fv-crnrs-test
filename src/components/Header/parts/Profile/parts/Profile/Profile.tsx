import React, { FC } from "react";

import Icon from "../../../../../Icon/Icon";
import { Profile as ProfileStyled } from './Profile.styles';

interface IProfileProps {}

const Profile: FC<IProfileProps> = () => {
  return (
    <ProfileStyled to="!#">
      <Icon name="profile" />
    </ProfileStyled>
  );
};

export default Profile;
