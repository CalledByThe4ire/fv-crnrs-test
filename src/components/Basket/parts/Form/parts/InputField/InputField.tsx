import React from "react";
import { InputField as InputFieldStyled } from "./InputField.styles";

interface InputFieldProps {
  "data-role": string;
}

const InputField: React.FC<InputFieldProps> = (props) => {
  return (
    <InputFieldStyled data-role={props["data-role"]}>
      {props.children}
    </InputFieldStyled>
  );
};

export default InputField;
