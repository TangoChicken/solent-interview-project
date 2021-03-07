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

const Profile = (props) => {
  const picture = props.result.picture;
  const name = props.result.name;
  return (
    <ProfileContainer>
      <ProfilePicture src={picture.large} />
      <ProfileName>{`${name.first} ${name.last}`}</ProfileName>
      <ProfileDetails>
        <ProfileEmail>{props.result.email}</ProfileEmail>
        <ProfileDob>
          {new Date(props.result.dob.date).toLocaleDateString()}
        </ProfileDob>
        <ProfilePhone>{props.result.phone}</ProfilePhone>
      </ProfileDetails>
    </ProfileContainer>
  );
};

export default Profile;
export { Profile };
