import React from "react";

import { ResultContainer, ProfileThumb } from "./Result.styled";

class Result extends React.Component {
  render() {
    return (
      <ResultContainer>
        <ProfileThumb src={this.props.result.picture.medium} />
        {`${this.props.result.name.first} ${this.props.result.name.last}`}
      </ResultContainer>
    );
  }
}

export default Result;
export { Result };
