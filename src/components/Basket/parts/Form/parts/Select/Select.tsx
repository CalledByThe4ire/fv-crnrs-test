import React, { FC, useState, useRef, useEffect, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

import Icon from "../../../../../Icon/Icon";
import {
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem,
} from "./Select.styles";

interface IOption {
  value: string;
  label: string;
}

interface ISelectProps {
  onChange: (...args: any) => any;
  value: string;
  hasError: boolean;
}

interface ISelectContext {
  value: string;
  isOpen: boolean;
  hasError: boolean;
}

const options: IOption[] = [
  { value: "variant_1", label: "без упаковки" },
  { value: "variant_2", label: "стандартная" },
  { value: "variant_3", label: "подарочная" },
];

const Select: FC<ISelectProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const toggling = () => setIsOpen(!isOpen);

  const handleOptionClicked = (option: string) => () => {
    setSelectedOption(option);
    props.onChange(option);
    setIsOpen(false);
  };

  return (
    <SelectContext.Provider
      value={{ value: props.value, isOpen, hasError: props.hasError }}
    >
      <DropDownContainer tabIndex={0}>
        <DropDownHeader onClick={toggling}>
          <p>
            {(selectedOption && JSON.parse(selectedOption)?.label) ||
              "Тип упаковки"}
          </p>
          <Icon name="caret" />
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map((option) => (
                <ListItem
                  key={uuidv4()}
                  onClick={handleOptionClicked(JSON.stringify(option))}
                >
                  <span>{option.label}</span>
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </SelectContext.Provider>
  );
};

export const SelectContext = createContext<ISelectContext | null>(null);
export default Select;
