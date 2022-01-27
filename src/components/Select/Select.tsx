import React, { FC } from "react";
import Select from "react-select";

import { Select as StyledSelect } from "./Select.styles";

interface IOption {
  value: string;
  label: string;
}

interface ICustomSelectProps {
  options: IOption[];
  value: string;
  onChange: (...args: any) => any;
}

const CustomSelect: FC<ICustomSelectProps> = ({ onChange, options, value }) => {
  const defaultValue = (options: IOption[], value: string) => {
    return options ? options.find((option) => option.value === value) : "";
  };

  return (
    <StyledSelect>
      <Select
        value={defaultValue(options, value)}
        onChange={(value) => {
          onChange(value);
        }}
        options={options}
      />
    </StyledSelect>
  );
};

export default CustomSelect;
