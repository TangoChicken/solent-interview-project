import React from "react";

import {
  ProfileContainer,
  ProfilePicture,
  ProfileName,
  ProfileDetails,
  ProfileEmail,
  ProfileDob,
  ProfilePhone,
} from "./Profile.styled";

class Profile extends React.Component {
  render() {
    return (
      <ProfileContainer>
        <ProfilePicture />
        <ProfileName></ProfileName>
        <ProfileDetails>
          <ProfileEmail></ProfileEmail>
          <ProfileDob></ProfileDob>
          <ProfilePhone></ProfilePhone>
        </ProfileDetails>
      </ProfileContainer>
    );
  }
}

export default Profile;
export { Profile };
