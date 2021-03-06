import styled from "styled-components";
import Listing from "./Listing";

export const StyledListing = styled(Listing)`
  box-sizing: border-box;
  padding: 1.7rem 1.3rem;
  width: 100%;
  max-width: 27.8rem;

  @media (max-width: var(--collapse-width)) {
    padding: 0.6rem 1.3rem;
  }
`;
