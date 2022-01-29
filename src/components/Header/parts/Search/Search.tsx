import React, { FC } from "react";

import { Search as SearchStyled } from "./Search.styles";
import SearchIcon from "./parts/Search";
import { InputStyled } from './parts/Search.styles';

interface ISearchProps {}

const Search: FC<ISearchProps> = () => {
  return (
    <SearchStyled>
      <SearchIcon />
      <InputStyled placeholder="Поиск" />
    </SearchStyled>
  );
};

export default Search;
