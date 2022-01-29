import styled from "styled-components";

// interface IPropsStyled {
//   hasError: boolean;
//   isActive: boolean;
//   label?: string;
// }

// export const Input = styled.input<IPropsStyled>`
//   all: unset;
//   display: flex;
//   width: "100%";
//   justify-content: flex-start;
//   align-items: center;
//   padding-top: 18px;
//   padding-bottom: 9px;
//   color: ${(props) =>
//     props.hasError ? props.theme.colors.red : props.theme.colors.black};
//   border-bottom: ${(props) =>
//     props.hasError ? props.theme.colors.red : props.theme.colors.grey};
//   transition: all 0.3s ease-in-out;

//   &::placeholder {
//     color: ${(props) => props.theme.colors.grey};
//   }
// `;

// export const Label = styled.label<IPropsStyled>`
//   display: flex;
//   width: "100%";
//   margin-bottom: 4px;
//   font-size: 12px;
//   color: ${(props) =>
//     props.hasError ? props.theme.colors.red : props.theme.colors.grey};
//   visibility: ${(props) => (props.isActive ? "hidden" : "visible")};
//   transition: all 0.3s ease-in-out;
// `;

export const Input = styled.input`
  display: flex;
  width: 100%;
  color: ${(props) => props.theme.colors.black};
  all: unset;
  border-bottom: 1px solid ${(props) => props.theme.colors.grey};

  &::placeholder {
    color: ${(props) => props.theme.colors.grey};
  }
`;

export const Label = styled.label`
  display: flex;
  font-size: 12px;
  line-height: 1;
  color: ${(props) => props.theme.colors.grey};
`;

export const Form = styled.form`
  display: flex;
`;

export const Button = styled.button`
  display: flex;
  all: unstyled;
`;
