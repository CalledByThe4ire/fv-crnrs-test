import React, { FC, ComponentPropsWithoutRef } from "react";

import Basket from "./components/Basket";
import Favourites from "./components/Favourites";
import Profile from "./components/Profile";
import Search from "./components/Search";
import Caret from "./components/Caret";

type IconProps = {
  name: string;
} & ComponentPropsWithoutRef<"svg">;

const Icon: FC<IconProps> = ({ name, ...rest }) => {
  switch (name) {
    case "basket":
      return <Basket {...rest} />;
    case "favourites":
      return <Favourites {...rest} />;
    case "profile":
      return <Profile {...rest} />;
    case "search":
      return <Search {...rest} />;
      case "caret":
        return <Caret {...rest} />;
    default:
      return null;
  }
};

export default Icon;
