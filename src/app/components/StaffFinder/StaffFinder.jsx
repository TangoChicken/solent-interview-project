import React from "react";

import { Search } from "../Search/Search";
import { Listing } from "../Listing/Listing";
import { FinderContainer } from "./StaffFinder.styled";

class StaffFinder extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: ""};
  }

  onSearchChanged(newValue) {
    this.setState({ searchTerm: newValue });
  }

  render() {
    return (
      <FinderContainer>
        <Search onChange={this.onSearchChanged} />
        <Listing />
      </FinderContainer>
    );
  }
}

export default StaffFinder;
export { StaffFinder };
