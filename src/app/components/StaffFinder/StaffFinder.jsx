import React, { useState } from "react";

import { Search } from "../Search/Search";
import { Listing } from "../Listing/Listing";
import { Container } from "./StaffFinder.styled";

const StaffFinder = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <Container>
      <Search onChange={(newValue) => setSearchTerm(newValue)} />
      <Listing searchTerm={searchTerm} />
    </Container>
  );
};

export default StaffFinder;
export { StaffFinder };
