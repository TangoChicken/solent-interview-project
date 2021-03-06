import React from "react";

import {
  SearchContainer,
  Header,
  HeaderTitle,
  HeaderSubTitle,
  SearchBar,
} from "./Search.styled";

class Search extends React.Component {
  render() {
    return (
      <SearchContainer>
        <Header className="Header">
          <HeaderTitle>Find a member of staff</HeaderTitle>
          <HeaderSubTitle>Use the search box to get started</HeaderSubTitle>
          <SearchBar placeholder="Start typing..."></SearchBar>
        </Header>
      </SearchContainer>
    );
  }
}

export default Search;
export { Search };
