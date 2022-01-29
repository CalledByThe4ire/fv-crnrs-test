import React, { FC } from "react";

import Icon from "../../../../../Icon/Icon";
import { Basket as BasketStyled } from "./Basket.styles";

interface IBasketProps {
  count?: number;
}

const Basket: FC<IBasketProps> = (props) => {
  const { count = 0 } = props;

  return (
    <BasketStyled to="!#" data-count={count}>
      <Icon name="basket" />
    </BasketStyled>
  );
};

export default Basket;
