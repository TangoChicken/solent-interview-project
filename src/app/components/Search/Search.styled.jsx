import styled from "styled-components";
import backgroundImageURL from 'Public/images/background.jpg';
import searchIconURL from 'Public/icons/search.svg';
import {env} from 'Global/Global.styled';

export const SearchContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 21.9rem;
  background: url("${backgroundImageURL}");
  background-size: cover;
  background-position: center;
  color: var(--lightest);

  @media (max-width: ${env.collapseWidth}) {
    height: 17.9rem;
    /* Darken the background in mobile view */
    background-color: rgba(0, 0, 0, 0.3);
    background-blend-mode: overlay;
  }
`;

export const Header = styled.section`
  box-sizing: border-box;
  width: 27.8rem;
  padding: 0 1.3rem;

  @media (max-width: ${env.collapseWidth}) {
    text-align: center;
  }
`;

export const HeaderTitle = styled.h1`
  margin: 0.4rem 0;
  font-size: 3.5em;
  font-weight: bold;
  line-height: 1em;

  @media (max-width: ${env.collapseWidth}) {
    font-size: 3em;
  }
`;

export const HeaderSubTitle = styled.h2`
  margin: 0;
  font-size: 1.1em;
  font-weight: normal;

  @media (max-width: ${env.collapseWidth}) {
    font-size: 1.2em;
  }
`;

export const SearchBar = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 0.2rem 0.8rem 0.5rem;
  border: 1px solid var(--dark);
  margin: 1.8rem 0 2.6rem 0;

  /* Add search icon to the right of the search bar */
  background-image: url("${searchIconURL}");
  background-repeat: no-repeat;
  background-size: 1rem;
  background-position: right 1rem center;

  color: var(--darker);
  font-size: 1.1em;
  border-radius: 0.3em;

  &::placeholder {
    color: var(--light);
  }

  @media (max-width: ${env.collapseWidth}) {
    padding: 0.6rem 3rem 0.9rem 0.8rem;
    margin: 1.8rem 0 1.5rem 0;
    background-size: 1.6rem;
  }
`;
