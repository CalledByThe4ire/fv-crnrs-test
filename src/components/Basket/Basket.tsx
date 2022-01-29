import React from "react";
import { Basket as BasketStyled } from './Basket.styles';


interface IBasketProps {}

const Basket: React.FC<IBasketProps> = () => {
  return (
    <>
        <BasketStyled>Basket</BasketStyled>
    </>
  );
};

export default Basket;
