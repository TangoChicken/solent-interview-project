import React from "react";
import { Link } from "react-router-dom";

import { ResultContainer, ProfileThumb } from "./Result.styled";

const Result = (props) => {
  const name = props.result.name;
  const picture = props.result.picture;
  return (
    <Link
      to={{
        pathname: "/Profile",
        state: props.result,
      }}
    >
      <ResultContainer>
        <ProfileThumb src={picture.medium} />
        {`${name.first} ${name.last}`}
      </ResultContainer>
    </Link>
  );
};

export default Result;
export { Result };
