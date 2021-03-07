import React from "react";

import { Container } from "../StaffFinder/StaffFinder.styled";
import { Profile } from "../Profile/Profile";
import { Search } from "../Search/Search";

class StaffProfile extends React.Component {
  render() {
    return (
      <Container>
        <Search profile className="StyledSearch" />
        <Profile result={this.props.result} className="StyledProfile" />
      </Container>
    );
  }
}

export default StaffProfile;
export { StaffProfile };
