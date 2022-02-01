import React from "react";
import { Products as ProductsStyled, Heading as HeadingStyled, Result as ResultStyled } from "./Products.styles";
import Product from "../Product/Product";

interface ProductsProps {}

const Products: React.FC<ProductsProps> = () => {
  return (
    <ProductsStyled>
      <HeadingStyled>Выбранные товары:</HeadingStyled>
      <Product />
      <ResultStyled>
        <div>Итог:</div>
        <div>
          <span>3790</span>
          <span>&nbsp;руб.</span>
        </div>
      </ResultStyled>
    </ProductsStyled>
  );
};

export default Products;
