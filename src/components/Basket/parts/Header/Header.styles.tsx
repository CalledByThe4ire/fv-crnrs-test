import styled from "styled-components";
import { down } from "styled-breakpoints";

export const Header = styled.header`
  grid-area: header;
  display: flex;
  flex-flow: column wrap;
  margin-bottom: 30px;

  h2 {
    margin: 0;
    padding: 0;
    font-family: "AG_Helvetica Bold", "Arial", sans-serif;
    font-size: 40px;
    line-height: 1;
    font-weight: 700;
    margin-bottom: 18px;

    ${down("desktop")} {
      font-size: 30px;
    }
  }

  p {
    display: flex;
    margin: 0;
    padding: 0;

    span {
      display: inline-flex;
      margin-right: 10px;
    }
  }

  a {
    color: ${(props) => props.theme.colors.grey};
    text-decoration: underline;
  }
`;
