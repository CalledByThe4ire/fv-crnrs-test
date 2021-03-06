import React, { FC, ComponentPropsWithoutRef } from "react";

import { StyledSVG } from './SVG.styles';

const SVG: FC<ComponentPropsWithoutRef<"svg">> = ({
  width = "27px",
  height = "27px",
  fill = "#000",
}) => (
  <StyledSVG
    width={width}
    height={height || width}
    fill="none"
    viewBox="0 0 27 27"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.1111 23.2222C18.2476 23.2222 23.2222 18.2476 23.2222 12.1111C23.2222 5.97461 18.2476 1 12.1111 1C5.97461 1 1 5.97461 1 12.1111C1 18.2476 5.97461 23.2222 12.1111 23.2222Z"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M25.9997 26L19.958 19.9584"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </StyledSVG>
);

export default SVG;
