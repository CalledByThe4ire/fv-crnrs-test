import React from "react";

import {
  Product as ProductStyled,
  ImageWrapper,
  ContentWrapper,
  Heading,
  Description,
  Controls,
  Control,
  Count,
  Price,
  Link,
} from "./Product.styles";
import Icon from "../Icon/Icon";
import productImage from "../../assets/images/product.jpg";

interface ProductProps {}

const Products: React.FC<ProductProps> = () => {
  return (
    <ProductStyled>
      <ImageWrapper>
        <img
          src={productImage}
          alt="Изображение товара"
          width="100%"
          height="100%"
        />
      </ImageWrapper>
      <ContentWrapper>
        <Heading>Товар 1</Heading>
        <Description>Описание товара, которое может быть длинным</Description>
        <Controls>
          <Control>
            <Icon name="minus" />
          </Control>
          <Count>1</Count>
          <Control>
            <Icon name="plus" />
          </Control>
        </Controls>
      </ContentWrapper>
      <ContentWrapper>
        <Price>
          <span>1090</span>&nbsp;руб.
        </Price>
        <Link to="!#">Удалить</Link>
      </ContentWrapper>
    </ProductStyled>
  );
};

export default Products;
