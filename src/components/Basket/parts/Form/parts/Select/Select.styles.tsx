import React, { FC, useContext } from "react";
import styled from "styled-components";

import { SelectContext } from "./Select";

interface IDropDownContainerWrapper {
  value: boolean;
  hasError?: boolean;
}

interface IDropDownHeaderWrapper {
  isOpen?: boolean;
  hasError?: boolean;
  tabIndex?: number;
}

const DropDownContainerWrapper = styled("div")<IDropDownContainerWrapper>`
  all: unset;
  position: relative;
  display: flex;
  width: 100%;
  cursor: pointer;

  &&& + * {
    font-size: ${(props) => {
      return props.value || props.hasError ? props.theme.fontSizes.small : 0;
    }};
  }
`;

export const DropDownContainer: FC<{ tabIndex: number }> = (props) => {
  const value = useContext(SelectContext);

  return (
    <DropDownContainerWrapper
      value={Boolean(value?.value)}
      hasError={value?.hasError}
      tabIndex={props.tabIndex}
    >
      {props.children}
    </DropDownContainerWrapper>
  );
};

const DropDownHeaderWrapper = styled("div")<IDropDownHeaderWrapper>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: inherit;
  color: ${(props) => props.theme.colors.grey};
  border-bottom: 1px solid
    ${(props) =>
      props.hasError ? props.theme.colors.red : props.theme.colors.grey};
  transition: all 0.3s ease-in-out;

  > * {
    &:first-child {
      width: 100%;
      margin: 0;
      padding-top: 5px;
      padding-right: 5px;
      padding-bottom: 8px;
      padding-left: 0;
    }

    &:last-child {
      transform: rotate(${(props) => (props.isOpen ? "180deg" : 0)});
      transition: inherit;
    }
  }
`;

export const DropDownHeader: FC<{ onClick: (...args: any) => any }> = (
  props
) => {
  const value = useContext(SelectContext);

  return (
    <DropDownHeaderWrapper
      onClick={props.onClick}
      isOpen={value?.isOpen}
      hasError={value?.hasError}
    >
      {props.children}
    </DropDownHeaderWrapper>
  );
};

export const DropDownListContainer = styled("div")`
  z-index: 999;
  position: absolute;
  top: 100%;
  display: flex;
  width: inherit;
`;

export const DropDownList = styled("ul")`
  display: flex;
  flex-flow: column wrap;
  width: inherit;
  height: inherit;
  margin: 0;
  padding: 20px;
  list-style: none;
  color: ${(props) => props.theme.colors.grey};
  background: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.grey};
  border-top: none;
`;

export const ListItem = styled("li")`
  display: flex;
  width: 100%;
  transition: all 0.3s ease-in-out;

  span {
    width: 100%;
  }

  &:hover {
    color: ${(props) => props.theme.colors.black};
  }

  &:not(:last-of-type) {
    margin-bottom: 20px;
  }
`;
