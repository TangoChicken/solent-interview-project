import React from "react";

import { Result } from "../Result/Result";
import { ListingContainer } from "./Listing.styled";

class Listing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { randomUsers: {} };
  }

  async getRandomUsers(amount) {
    const response = await fetch(
      `https://randomuser.me/api/?results=${amount}`
    );
    const randomUsers = await response.json();
    // console.log(randomUsers);
    this.setState({ randomUsers: randomUsers });
  }

  componentDidMount() {
    console.log("ComponentMount");
    this.getRandomUsers(10);
  }

  renderResults(randomUsers) {
    const results = randomUsers.results;
    if (results) {
      console.log(results);
      return results.map((result, index) => {
        return <Result key={index} result={result} />;
      });
    }
  }

  render() {
    const { randomUsers } = this.state;
    return (
      <ListingContainer>{this.renderResults(randomUsers)}</ListingContainer>
    );
  }
}

export default Listing;
export { Listing };
