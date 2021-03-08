import React from "react";
import { Link } from "react-router-dom";

import { ResultContainer, ProfileThumb } from "./Result.styled";

/**
 * Single result that links to the respective profile page
 */
export const Result = (props) => {
  const name = props.result.name;
  const fullName = `${name.first} ${name.last}`;
  const picture = props.result.picture;
  return (
    <Link
      to={{
        pathname: "/Profile",
        state: props.result,
      }}
      aria-label={`Profile for ${fullName}`}
    >
      <ResultContainer>
        <ProfileThumb src={picture.medium} alt={`Photo of ${fullName}`} />
        {fullName}
      </ResultContainer>
    </Link>
  );
};
