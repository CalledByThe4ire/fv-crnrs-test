import React, { FC, ComponentPropsWithoutRef } from "react";

import { StyledSVG } from "./SVG.styles";

const SVG: FC<ComponentPropsWithoutRef<"svg">> = ({
  width = "16px",
  height = "2px",
  fill = "#000",
}) => (
  <StyledSVG
    width={width}
    height={height || width}
    fill="none"
    viewBox="0 0 16 2"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line y1="1" x2="16" y2="1" stroke={fill} strokeWidth="2"/>
  </StyledSVG>
);

export default SVG;
