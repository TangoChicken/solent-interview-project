import React from "react";

import { ResultContainer, ProfileThumb } from "./Result.styled";

class Result extends React.Component {
  render() {
    return (
      <ResultContainer>
        <ProfileThumb src="https://randomuser.me/api/portraits/thumb/men/75.jpg" />
        {"Paul Weaver"}
      </ResultContainer>
    );
  }
}

export default Result;
export { Result };
