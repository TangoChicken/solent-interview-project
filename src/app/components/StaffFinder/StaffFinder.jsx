import React, { useState } from "react";

import { Search } from "../Search/Search";
import { Listing } from "../Listing/Listing";
import { Container } from "./StaffFinder.styled";

/**
 * Container component for the home page
 */
export const StaffFinder = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <Container>
      <Search onChange={(newValue) => setSearchTerm(newValue)} />
      <Listing searchTerm={searchTerm} />
    </Container>
  );
};
