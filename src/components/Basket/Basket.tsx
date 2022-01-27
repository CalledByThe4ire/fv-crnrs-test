import React from "react";
import { StyledBasket } from './Basket.styles';


interface IBasketProps {}

const Basket: React.FC<IBasketProps> = () => {
  return (
    <>
        <StyledBasket>Basket</StyledBasket>
    </>
  );
};

export default Basket;
