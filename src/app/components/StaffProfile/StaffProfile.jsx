import React from "react";

import { StaffProfileContainer } from "./StaffProfile.styled";
import { Profile } from "../Profile/Profile";
import { Search } from "../Search/Search";

class StaffProfile extends React.Component {
  render() {
    return (
      <StaffProfileContainer>
        <Search profile className="StyledSearch" />
        <Profile result={this.props.result} className="StyledProfile" />
      </StaffProfileContainer>
    );
  }
}

export default StaffProfile;
export { StaffProfile };
