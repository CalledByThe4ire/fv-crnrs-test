import React, { FC } from "react";
import Select from "react-select";

import { Select as SelectStyled } from "./Select.styles";

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
    <SelectStyled>
      <Select
        value={defaultValue(options, value)}
        onChange={(value) => {
          onChange(value);
        }}
        options={options}
      />
    </SelectStyled>
  );
};

export default CustomSelect;
