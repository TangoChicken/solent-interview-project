import React, { useState, useEffect } from "react";

import { Result } from "../Result/Result";
import { ListingContainer } from "./Listing.styled";

const Listing = (props) => {
  const [randomUsers, setRandomUsers] = useState({});
  const resultCount = 10;

  useEffect(() => {
    getRandomUsers(resultCount);
  }, []);

  const getRandomUsers = async (amount) => {
    const response = await fetch(
      `https://randomuser.me/api/?results=${amount}`
    );
    const randomUsers = await response.json();
    setRandomUsers(randomUsers);
  };

  const renderResults = () => {
    const results = randomUsers.results;
    if (results) {
      const filtered = results.filter((result) => {
        const fullName = `${result.name.first} ${result.name.last}`;
        return fullName.toLowerCase().includes(props.searchTerm.toLowerCase());
      });
      const mapped = filtered.map((result, index) => {
        return <Result key={index} result={result} />;
      });

      return mapped;
    }
  };

  return <ListingContainer>{renderResults()}</ListingContainer>;
};

export default Listing;
export { Listing };
