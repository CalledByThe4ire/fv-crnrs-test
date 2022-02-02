import styled from "styled-components";
import { down } from "styled-breakpoints";

interface IPropsStyled {
  hasError?: boolean;
  isActive?: boolean;
}

export const Input = styled.input<IPropsStyled>`
  all: unset;
  display: flex;
  width: 100%;
  padding-top: 5px;
  padding-bottom: 8px;
  color: ${(props) =>
    props.hasError ? props.theme.colors.red : props.theme.colors.black};
  border-bottom: 1px solid
    ${(props) =>
      props.hasError ? props.theme.colors.red : props.theme.colors.grey};
  transition: all 0.3s ease-in-out;

  &::placeholder {
    color: ${(props) => props.theme.colors.grey};
  }

  &:focus,
  &:not([value=""]) {
    & + label {
      font-size: ${(props) => props.theme.fontSizes.small};
    }
  }
`;

export const Label = styled.label<IPropsStyled>`
  display: flex;
  order: -1;
  font-size: ${(props) => (props.hasError ? props.theme.fontSizes.small : 0)};
  line-height: 1;
  color: ${(props) =>
    props.hasError ? props.theme.colors.red : props.theme.colors.grey};
  transition: all 0.3s ease-in-out;
`;

export const Form = styled.form`
  all: unset;
  display: grid;
  column-gap: 2%;
  grid-template-columns: 24% 24% 50%;
  grid-template-rows: auto;
  grid-template-areas:
    "header . map"
    "form-field-address form-field-address map"
    "form-field-name form-field-phone map"
    "form-field-email form-field-email map"
    "form-field-package-select form-field-package-select map"
    "form-field-comment form-field-comment map"
    "products products map"
    "form-field-submit form-field-submit map";

  ${down("desktop")} {
    column-gap: initial;
    grid-template-columns: auto;
    grid-template-rows: auto auto minmax(200px, 500px) repeat(5, auto) 1fr;
    grid-template-areas:
      "header"
      "form-field-address"
      "map"
      "form-field-name"
      "form-field-phone"
      "form-field-email"
      "form-field-package-select"
      "form-field-comment"
      "products"
      "form-field-submit";
  }
`;

export const Button = styled.button`
  all: unset;
  grid-area: form-field-submit;
  align-self: end;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  padding: 24px;
  font-family: "AG_Helvetica Bold", "Arial", sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1;
  border: 1px solid ${(props) => props.theme.colors.black};
  background-color: transparent;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:focus,
  &:active {
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.black};
  }
`;
