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
    this.setState({ randomUsers: randomUsers });
  }

  componentDidMount() {
    console.log("ComponentMount");
    this.getRandomUsers(10);
  }

  renderResults(randomUsers, searchTerm) {
    const results = randomUsers.results;
    if (results) {
      console.log(searchTerm);
      const filtered = results.filter((result) => {
        console.log(result);
        const fullName = `${result.name.first} ${result.name.last}`;
        return fullName.toLowerCase().includes(searchTerm.toLowerCase());
      });
      const mapped = filtered.map((result, index) => {
        return <Result key={index} result={result} />;
      });

      return mapped;
    }
  }

  render() {
    const { randomUsers } = this.state;
    const { searchTerm } = this.props;
    return (
      <ListingContainer>
        {this.renderResults(randomUsers, searchTerm)}
      </ListingContainer>
    );
  }
}

export default Listing;
export { Listing };
