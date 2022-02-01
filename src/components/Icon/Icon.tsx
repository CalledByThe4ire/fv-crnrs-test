import React, { FC, ComponentPropsWithoutRef } from "react";

import Basket from "./parts/Basket";
import Favourites from "./parts/Favourites";
import Profile from "./parts/Profile";
import Menu from "./parts/Menu";
import Search from "./parts/Search";
import Caret from "./parts/Caret";
import Minus from "./parts/Minus";
import Plus from "./parts/Plus";
import Logo from "./parts/Logo";

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
      case "menu":
        return <Menu {...rest} />;
    case "search":
      return <Search {...rest} />;
      case "caret":
        return <Caret {...rest} />;
        case "minus":
          return <Minus {...rest} />;
          case "plus":
            return <Plus {...rest} />;
        case "logo":
          return <Logo {...rest} />;
    default:
      return null;
  }
};

export default Icon;
