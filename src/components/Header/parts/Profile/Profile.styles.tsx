import styled from "styled-components";

export const Profile = styled.ul`
  display: flex;
  align-items: center;
  grid-area: "profile";
  margin: 0;
  padding: 0;
  list-style: none;

  & > *:not(:last-of-type) {
    margin-right: 22px;
  }
`;
