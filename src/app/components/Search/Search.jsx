import React from "react";

import {
  SearchContainer,
  Header,
  HeaderTitle,
  HeaderSubTitle,
  SearchBar,
} from "./Search.styled";

const Search = (props) => {
  return (
    <SearchContainer $profile={props.profile}>
      <Header className="Header">
        <HeaderTitle>Find a member of staff</HeaderTitle>
        <HeaderSubTitle>Use the search box to get started</HeaderSubTitle>
        <SearchBar
          onChange={(event) => props.onChange(event.target.value)}
          placeholder="Start typing..."
          role="search"
          aria-label="Search for a staff member"
        ></SearchBar>
      </Header>
    </SearchContainer>
  );
};

export default Search;
export { Search };
