import React, { FC, ComponentPropsWithoutRef } from "react";

import { StyledSVG } from "./SVG.styles";

const SVG: FC<ComponentPropsWithoutRef<"svg">> = ({
  width = "16px",
  height = "9px",
  fill = "#000",
}) => (
  <StyledSVG
    width={width}
    height={height || width}
    fill="none"
    viewBox="0 0 16 9"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.6667 1L7.99999 7.66667L1.33332 0.999999" stroke={fill} />
  </StyledSVG>
);

export default SVG;
