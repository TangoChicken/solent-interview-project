import React from "react";

import {
  SearchContainer,
  Header,
  HeaderTitle,
  HeaderSubTitle,
  SearchBar,
} from "./Search.styled";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    return (
      <SearchContainer $profile={this.props.profile}>
        <Header className="Header">
          <HeaderTitle>Find a member of staff</HeaderTitle>
          <HeaderSubTitle>Use the search box to get started</HeaderSubTitle>
          <SearchBar
            onChange={this.handleChange}
            placeholder="Start typing..."
          ></SearchBar>
        </Header>
      </SearchContainer>
    );
  }
}

export default Search;
export { Search };
