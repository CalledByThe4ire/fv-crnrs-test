import styled from "styled-components";
import { down } from "styled-breakpoints";

export const InputField = styled.div`
  display: flex;
  flex-flow: column wrap;
  flex-grow: 1;
  margin-bottom: 32px;

  ${down("desktop")} {
    margin-bottom: 16px;
  }

  &[data-role="address"] {
    grid-area: form-field-address;
  }

  &[data-role="name"] {
    grid-area: form-field-name;
  }

  &[data-role="phone"] {
    grid-area: form-field-phone;
  }

  &[data-role="email"] {
    grid-area: form-field-email;
  }

  &[data-role="package"] {
    grid-area: form-field-package-select;
  }

  &[data-role="comment"] {
    grid-area: form-field-comment;
  }
`;
