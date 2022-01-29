import styled from "styled-components";

export const Breadcrumbs = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  a:not(:last-of-type) {
    li {
      &::after {
        content: "/";
        display: flex;
        justify-content: center;
        width: 25px;
      }
    }
  }
`;
