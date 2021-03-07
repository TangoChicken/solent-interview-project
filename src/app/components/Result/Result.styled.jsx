import styled from "styled-components";
import circleArrowIconURL from "Public/icons/circle-arrow.svg";
import { env } from "Global/Global.styled";

export const ResultContainer = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 3rem;
  padding: 0.3rem;
  border: 1px solid var(--darker);
  margin: 0.65rem 0;

  background-color: var(--lightest);
  /* Add circle arrow icon to right of result */
  background-image: url("${circleArrowIconURL}");
  background-repeat: no-repeat;
  background-size: 1.5rem;
  background-position: right 0.6rem center;

  font-size: 0.8rem;
  font-weight: bold;
  border-radius: 0.3rem;
  cursor: pointer;

  @media (max-width: ${env.collapseWidth}) {
    height: 3.65rem;
    padding: 0.3rem 0.6rem;
    margin: 0.9rem 0;

    background-size: 1.9rem;
    background-position: right 0.6rem center;

    font-size: 1rem;
    border-radius: 0.4rem;
  }
`;

export const ProfileThumb = styled.img`
  border-radius: 50%;
  height: 100%;
  border: 1px solid var(--darker);
  margin-right: 0.4em;
`;
