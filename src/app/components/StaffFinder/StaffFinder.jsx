import React from "react";

import { Search } from "../Search/Search";
import { Listing } from "../Listing/Listing";
import { FinderContainer } from "./StaffFinder.styled";

class StaffFinder extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "" };
    this.handleSearchChanged = this.handleSearchChanged.bind(this);
  }

  handleSearchChanged(newValue) {
    this.setState({ searchTerm: newValue });
  }

  render() {
    const { searchTerm } = this.state;
    return (
      <FinderContainer>
        <Search onChange={this.handleSearchChanged} />
        <Listing searchTerm={searchTerm} />
      </FinderContainer>
    );
  }
}

export default StaffFinder;
export { StaffFinder };
