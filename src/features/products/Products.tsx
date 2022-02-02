import React, { useEffect } from "react";
import { SpinnerRound } from 'spinners-react';
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { RootState } from '../../app/store';
import {
  Status,
  fetchProducts,
  removeProduct,
  incProductQuantity,
  decProductQuantity,
  selectTotal,
  selectProducts,
  inc,
  dec,
  remove,
} from "./productsSlice";
import {
  Products as ProductsStyled,
  Heading as HeadingStyled,
  Result as ResultStyled,
} from "./Products.styles";
import Product from "./parts/Product/Product";

interface ProductsProps {}

const Products: React.FC<ProductsProps> = () => {
  const count = useAppSelector(selectTotal);
  const products = useAppSelector(selectProducts);
  const loading = useAppSelector((state: RootState) => state.products.status);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <ProductsStyled>
      <HeadingStyled>Выбранные товары:</HeadingStyled>
      <SpinnerRound enabled={loading === Status.Loading} color="#000000" />
      {products?.length && products?.map(product => <Product key={product.id} product={product} />)}
      <ResultStyled>
        <div>Итог:</div>
        <div>
          <span>{count}</span>
          <span>&nbsp;руб.</span>
        </div>
      </ResultStyled>
    </ProductsStyled>
  );
};

export default Products;
