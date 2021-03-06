import styled, { css } from "styled-components";
import { env } from "Global/Global.styled";
import dobIconURL from "Public/icons/dob.svg";
import emailIconURL from "Public/icons/email.svg";
import phoneIconURL from "Public/icons/phone.svg";

export const ProfileContainer = styled.section`
  padding: 3.3rem 0;
  color: var(--darker);
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 29.2rem;
`;

export const ProfilePicture = styled.img`
  border-radius: 50%;
  padding: 0.6rem;
  width: 5.6rem;
  background: var(--lightest);
  border: 1px solid #cecece;
`;

export const ProfileName = styled.h1`
  font-size: 1.5rem;
  margin: 0.1em;
`;

export const ProfileDetails = styled.section`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  align-items: center;
`;

const detailsShared = css`
  padding: 1em 0 1em 1.5em;
  background-repeat: no-repeat;
  background-position: left center;
`;

export const ProfileEmail = styled.div`
  ${detailsShared}

  background-size: 1.2em;
  background-image: url("${emailIconURL}");
`;

export const ProfileDob = styled.div`
  ${detailsShared}
  background-size: 1.1em;
  background-image: url("${dobIconURL}");
`;

export const ProfilePhone = styled.div`
  ${detailsShared}
  background-size: 0.8em;
  background-image: url("${phoneIconURL}");
  background-position: left 0.3em center;
`;
