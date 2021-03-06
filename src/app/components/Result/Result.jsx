import React from "react";
import { Link } from "react-router-dom";

import { ResultContainer, ProfileThumb } from "./Result.styled";

class Result extends React.Component {
  render() {
    return (
      <Link
        to={{
          pathname: "/Profile",
          state: this.props.result,
        }}
      >
        <ResultContainer>
          <ProfileThumb src={this.props.result.picture.medium} />
          {`${this.props.result.name.first} ${this.props.result.name.last}`}
        </ResultContainer>
      </Link>
    );
  }
}

export default Result;
export { Result };
