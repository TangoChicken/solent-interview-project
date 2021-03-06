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

/**
 * A profile section containing basic details for a specific result
 */
export const Profile = (props) => {
  const name = props.result.name;
  const fullName = `${name.first} ${name.last}`;
  const picture = props.result.picture;
  return (
    <ProfileContainer>
      <ProfilePicture src={picture.large} alt={`Photo of ${fullName}`} />
      <ProfileName>{fullName}</ProfileName>
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
