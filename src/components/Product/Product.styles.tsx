import styled from "styled-components";
import { down } from "styled-breakpoints";
import { Link as BaseLink } from "../../styles";

export const ImageWrapper = styled.div`
  width: 150px;
  height: 150px;

  ${down("desktop")} {
    width: 80px;
    height: 80px;
  }

  img {
    display: flex;
    object-fit: cover;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  padding-left: 20px;
  padding-right: 20px;

  > *::not(:last-of-type) {
    width: 100%;
  }

  &:last-of-type {
    flex-flow: row wrap;
  }

  ${down("desktop")} {
    padding-left: 12px;
    padding-right: 12px;
  }
`;

export const Heading = styled.h3`
  display: flex;
  margin: 0;
  padding: 0;
  padding-bottom: 8px;
  font-family: "AG_Helvetica Bold", Arial, sans-serif;
  font-size: 20px;
  line-height: 1;
  font-weight: 700;

  ${down("desktop")} {
    font-size: 16ƒpx;
  }
`;

export const Description = styled.p`
  display: flex;
  margin: 0;
  padding: 0;
  padding-bottom: 8px;
  color: ${(props) => props.theme.colors.grey};

  ${down("desktop")} {
    display: none;
  }
`;

export const Controls = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  margin-right: auto;
  border: 1px solid ${(props) => props.theme.colors.black};
`;

export const Control = styled.button`
  all: unset;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding: 12px;

  svg {
    width: 16px;
    height: 16px;

    ${down("desktop")} {
      width: 12px;
      height: 12px;
    }
  }
`;

export const Count = styled.span`
  display: flex;
  font-family: "AG_Helvetica Bold", Arial, sans-serif;
  font-size: 20px;
  line-height: 1;
  font-weight: 700;

  ${down("desktop")} {
    font-size: 16px;
  }
`;

export const Price = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-basis: 100%;
  padding-right: 15px;
  font-family: "AG_Helvetica Bold", Arial, sans-serif;
  font-size: 20px;
  line-height: 1;
  font-weight: 700;

  ${down("desktop")} {
    padding-right: initial;
    font-size: 16px;
  }
`;

export const Link = styled(BaseLink)`
  flex-basis: 100%;
  justify-content: flex-end;
  padding-right: 15px;
  margin-top: auto;
  font-size: 14px;
  color: ${(props) => props.theme.colors.grey};
  text-decoration: underline;

  ${down("desktop")} {
    padding-right: initial;
    font-size: 12px;
  }
`;

export const Product = styled.section`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 150px 1fr 1fr;
  grid-template-areas: "image content content";

  ${down("desktop")} {
    grid-template-columns: 80px 1fr 1fr;
  }

  &:not(:last-of-type) {
    padding-bottom: 24px;
    border-bottom: 1px solid ${(props) => props.theme.colors.black};
  }
  ${down("desktop")} {
  }
`;
