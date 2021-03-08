import React, { useState, useEffect } from "react";

import { Result } from "../Result/Result";
import { ListingContainer } from "./Listing.styled";

/**
 * List of many results that can be filtered by the search component.
 * Automatically populates from Random Users API
 */
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
      /* Filter out results that do not contain the search term */
      const filtered = results.filter((result) => {
        const fullName = `${result.name.first} ${result.name.last}`;
        return fullName.toLowerCase().includes(props.searchTerm.toLowerCase());
      });
      /* Map remaining results to a list of Result components */
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
