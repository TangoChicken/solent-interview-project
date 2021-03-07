import styled from "styled-components";

export const FinderContainer = styled.section`
  display: flex;
  width: 100%;
  max-width: var(--max-width);
  min-width: var(--min-width);
  /* Ensure the container always fills viewport height */
  min-height: 100vh;
  margin: 0 auto;

  background: var(--lighter);

  flex-direction: column;
  align-items: center;
`;
