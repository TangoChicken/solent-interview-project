import React, { useState, useEffect } from "react";

import { Result } from "../Result/Result";
import { ListingContainer } from "./Listing.styled";

const Listing = (props) => {
  const [randomUsers, setRandomUsers] = useState({});
  const fields = ["name", "email", "dob", "phone", "picture"];
  const resultCount = 10;

  /* Get random users from API after first render */
  useEffect(() => {
    getRandomUsers();
  }, []);

  const getRandomUsers = async () => {
    const response = await fetch(
      `https://randomuser.me/api/?results=${resultCount}&inc=${fields.join()}`
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
        return <Result role="listitem" key={index} result={result} />;
      });

      return mapped;
    }
  };

  return <ListingContainer role="list">{renderResults()}</ListingContainer>;
};

export default Listing;
export { Listing };
