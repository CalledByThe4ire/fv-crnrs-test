import styled from "styled-components";
import { down } from "styled-breakpoints";

export const Heading = styled.h2`
  display: flex;
  margin: 0;
  margin-bottom: 32px;
  padding: 0;
  font-family: "AG_Helvetica Bold", Arial, sans-serif;
  font-size: 28px;
  line-height: 1;
  font-weight: 700;

  ${down("desktop")} {
    font-size: 26px;
  }
`;

export const Result = styled.div`
  display: none;
  justify-content: space-between;
  align-items: baseline;
  flex-basis: 100%;
  margin-top: 24px;
  margin-bottom: 24px;
  font-family: "AG_Helvetica Bold", Arial, sans-serif;
  font-size: 26px;
  line-height: 1;
  font-weight: 700;

  > * {
    display: flex;
    align-items: center;
  }

  ${down("desktop")} {
    display: flex;
  }
`;

export const Products = styled.section`
  grid-area: products;
  margin-bottom: 24px;

  ${down("desktop")} {
    margin-bottom: initial;
  }
`;
