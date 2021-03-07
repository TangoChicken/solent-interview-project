import React from "react";

import { Search } from "../Search/Search";
import { Listing } from "../Listing/Listing";
import { Container } from "./StaffFinder.styled";

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
      <Container>
        <Search onChange={this.handleSearchChanged} />
        <Listing searchTerm={searchTerm} />
      </Container>
    );
  }
}

export default StaffFinder;
export { StaffFinder };
