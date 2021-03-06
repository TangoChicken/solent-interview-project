import React from "react";

import { Result } from "../Result/Result";
import { ListingContainer } from "./Listing.styled";

class Listing extends React.Component {
  render() {
    return (
      <ListingContainer>
        <Result />
        <Result />
        <Result />
        <Result />
      </ListingContainer>
    );
  }
}

export default Listing;
export { Listing };