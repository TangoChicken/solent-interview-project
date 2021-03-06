import React from "react";

import { Search } from "../Search/Search";
import { StyledListing } from "../Listing/Listing.styled";
import { FinderContainer } from "./StaffFinder.styled";

class StaffFinder extends React.Component {
  render() {
    return (
      <FinderContainer>
        <Search />
        <StyledListing />
      </FinderContainer>
    );
  }
}

export default StaffFinder;
export { StaffFinder };
