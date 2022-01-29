import React, { FC } from "react";

import Icon from "../../../../Icon/Icon";
import { Search as StyledSearch } from './Search.styles';

interface IBasketProps {}

const Search: FC<IBasketProps> = () => {
  return (
    <StyledSearch to="!#">
      <Icon name="search" />
    </StyledSearch>
  );
};

export default Search;
