import React, { FC, ComponentPropsWithoutRef } from "react";

import { StyledSVG } from './SVG.styles';

const SVG: FC<ComponentPropsWithoutRef<"svg">> = ({
  width = "28px",
  height = "22px",
  fill = "#000",
}) => (
  <StyledSVG
    width={width}
    height={width}
    viewBox="0 0 28 22"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line y1="1" x2="28" y2="1" stroke={fill} strokeWidth="2" />
    <line y1="11" x2="28" y2="11" stroke={fill} strokeWidth="2" />
    <line y1="21" x2="28" y2="21" stroke={fill} strokeWidth="2" />
  </StyledSVG>
);

export default SVG;
