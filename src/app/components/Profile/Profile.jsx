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
        <ProfilePicture src="https://randomuser.me/api/portraits/men/75.jpg" />
        <ProfileName>Paul Weaver</ProfileName>
        <ProfileDetails>
          <ProfileEmail>paul.weaver@example.com</ProfileEmail>
          <ProfileDob>4/5/1990</ProfileDob>
          <ProfilePhone>(149)-409-0442</ProfilePhone>
        </ProfileDetails>
      </ProfileContainer>
    );
  }
}

export default Profile;
export { Profile };
