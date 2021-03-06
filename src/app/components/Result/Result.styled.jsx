import styled from "styled-components";
import Result from "./Result";
import {env} from 'Global/Global.styled';

export const StyledResult = styled(Result)`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 3rem;
  padding: 0.4rem;
  border: 1px solid var(--darker);
  margin: 0.6rem 0;

  background-color: var(--lightest);
  /* Add circle arrow icon to right of result */
  background-image: url(icons/circle-arrow.svg);
  background-repeat: no-repeat;
  background-size: 1.5rem;
  background-position: right 0.5rem center;

  border-radius: 0.2rem;
  cursor: pointer;

  @media (max-width: ${env.collapseWidth}) {
    height: 3.8rem;
    margin: 0.8rem 0;

    background-size: 1.9rem;
    background-position: right 0.6rem center;

    color: var(--darker);
    font-weight: bold;
    border-radius: 0.4rem;
  }
`;

export const ProfileThumb = styled.img`
  border-radius: 50%;
  height: 100%;
  border: 1px solid var(--darker);
  margin-right: 0.4em;
`;
