import React from "react";

import { Search } from "../Search/Search";
import { Listing } from "../Listing/Listing";
import { FinderContainer } from "./StaffFinder.styled";

class StaffFinder extends React.Component {
  render() {
    return (
      <FinderContainer>
        <Search />
        <Listing />
      </FinderContainer>
    );
  }
}

export default StaffFinder;
export { StaffFinder };
