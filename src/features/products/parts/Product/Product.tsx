import React from "react";
import { useAppSelector, useAppDispatch } from "../../../../app/hooks";
import {
  IProduct,
  removeProduct,
  incProductQuantity,
  decProductQuantity,
  inc,
  dec,
  remove,
} from "../../productsSlice";

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
import Icon from "../../../../components/Icon/Icon";
import productImage from "../../../../assets/images/product.jpg";

interface ProductProps {
  product: IProduct;
}

const Products: React.FC<ProductProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const { id, name, description, price, count } = product;

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
        <Heading>{name}</Heading>
        <Description>{description}</Description>
        <Controls>
          <Control
            onClick={(evt) => {
              evt.preventDefault();
              dispatch(decProductQuantity(id));
            }}
            disabled={count === 1}
          >
            <Icon name="minus" />
          </Control>
          <Count>{count}</Count>

          <Control
            onClick={(evt) => {
              evt.preventDefault();
              dispatch(incProductQuantity(id));
            }}
          >
            <Icon name="plus" />
          </Control>
        </Controls>
      </ContentWrapper>
      <ContentWrapper>
        <Price>
          <span>{price}</span>&nbsp;руб.
        </Price>
        <Link
          to="!#"
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(removeProduct(id));
          }}
        >
          Удалить
        </Link>
      </ContentWrapper>
    </ProductStyled>
  );
};

export default Products;
