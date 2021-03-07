import styled from "styled-components";
import { env } from "Global/Global.styled";

export const ListingContainer = styled.section`
  box-sizing: border-box;
  padding: 1.7rem 1.3rem;
  width: 100%;
  max-width: 27.8rem;

  @media (max-width: ${env.collapseWidth}) {
    padding: 0.6rem 1.3rem;
  }

  /* Remove default link styling for Result buttons */
  a:link,
  a:visited,
  a:hover,
  a:active {
    color: var(--darker);
    text-decoration: none;
  }
`;
