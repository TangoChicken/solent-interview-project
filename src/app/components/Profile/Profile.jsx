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
    console.log(this.props);
    return (
      <ProfileContainer>
        <ProfilePicture src={this.props.result.picture.large} />
        <ProfileName>{`${this.props.result.name.first} ${this.props.result.name.last}`}</ProfileName>
        <ProfileDetails>
          <ProfileEmail>{this.props.result.email}</ProfileEmail>
          <ProfileDob>
            {new Date(this.props.result.dob.date).toLocaleDateString()}
          </ProfileDob>
          <ProfilePhone>{this.props.result.phone}</ProfilePhone>
        </ProfileDetails>
      </ProfileContainer>
    );
  }
}

export default Profile;
export { Profile };
