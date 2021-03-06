import React from "react";

import { Container } from "../StaffFinder/StaffFinder.styled";
import { Profile } from "../Profile/Profile";
import { Search } from "../Search/Search";

/**
 * Container component for the profile page
 */
export const StaffProfile = (props) => {
  return (
    <Container>
      <Search profile />
      <Profile result={props.result} />
    </Container>
  );
};
